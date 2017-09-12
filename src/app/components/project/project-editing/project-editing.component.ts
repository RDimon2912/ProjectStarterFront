import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {ProjectService} from '../project.service';
import {Project} from '../../model/project';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FundingDurationValidators} from "../../validators/FundingDurationValidators";

@Component({
  selector: 'app-project-editing',
  templateUrl: './project-editing.component.html',
  styleUrls: ['./project-editing.component.css']
})
export class ProjectEditingComponent implements OnInit, OnDestroy {
  formGroup: FormGroup;
  project = new Project;
  projectId: number;
  private subscription: Subscription;
  errorMessage: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private projectService: ProjectService,
    private fb: FormBuilder,
  ) {
    this.formGroup = this.fb.group({
      duration: ['', FundingDurationValidators.isValidAmount],
    });
  }

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe(params =>
      this.projectId = params['project_id']);

    this.projectService.findProjectById(this.projectId)
      .subscribe(data => {
        Object.assign(this.project, data);
      });
  }

  onSubmit() {
    this.errorMessage = null;
    this.projectService.updateProject(this.project)
      .subscribe(
        data => {
          Object.assign(this.project, data);
        },
        error => {
          this.errorMessage = error.json().message;
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
