import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {SubscribedProjectsComponent} from './subscribed-projects.component';
import {AuthModule} from '../auth/auth.module';
import {ProjectService} from '../project/project.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '',
        component: SubscribedProjectsComponent}
    ]),
    CommonModule,
    FormsModule,
    AuthModule,
  ],
  declarations: [
    SubscribedProjectsComponent,
  ],
  providers: [
    ProjectService
  ],
  exports: [RouterModule]
})
export class SubscribedProjectsModule { }
