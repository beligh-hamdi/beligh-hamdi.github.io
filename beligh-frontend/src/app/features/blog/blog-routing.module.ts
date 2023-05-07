import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogItemComponent } from './blog-item/blog-item.component';

const routes: Routes = [
  { path: '', component: BlogViewComponent },
  { path: 'post/:id', component: BlogItemComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
