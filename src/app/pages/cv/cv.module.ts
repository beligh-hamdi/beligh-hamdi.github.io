import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesModule } from '../pages.module';
import { CvComponent } from './cv.component';
import { RouterModule, Routes } from '@angular/router';
import { SkillListResolver } from 'src/app/core/services/skill-list.resolver';

const routes: Routes = [
  { path: '', component: CvComponent , resolve: { skills : SkillListResolver }}
];

@NgModule({
  declarations: [
    CvComponent,
  ],
  imports: [
    CommonModule,
    PagesModule,
    [RouterModule.forChild(routes)]
  ],
  exports: [
    RouterModule
  ]
})
export class CvModule { }
