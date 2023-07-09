import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { BlogEditorComponent } from './blog-editor/blog-editor.component';
import { ExpanseComponent } from './expanse/expanse.component';

const routes: Routes = [
  { path: '', component: AdminPageComponent},
  { path: 'editor', component: BlogEditorComponent },
  { path: 'expense', component: ExpanseComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
