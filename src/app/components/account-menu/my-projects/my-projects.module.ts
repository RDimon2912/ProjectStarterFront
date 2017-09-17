import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {MyProjectsComponent} from './my-projects.component';
import {AuthModule} from '../../auth/auth.module';
import {ProjectService} from '../../project/project.service';
import {ProjectCardModule} from '../../project-card/project-card.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '',
        component: MyProjectsComponent}
    ]),
    CommonModule,
    FormsModule,
    AuthModule,
    ProjectCardModule,
  ],
  declarations: [
    MyProjectsComponent,
  ],
  providers: [
    ProjectService
  ],
  exports: [RouterModule]
})
export class MyProjectsModule { }
