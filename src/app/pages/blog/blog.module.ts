import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { PagesModule } from '../pages.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: BlogComponent }
];

@NgModule({
  declarations: [
    BlogComponent
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
export class BlogModule { }
