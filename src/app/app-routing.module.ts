import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


export function loadPages() {
  return import(`./pages/pages.module`).then(m => m.PagesModule);
}

const routes: Routes = [
 // { path: '', loadChildren: loadPages }
  { path: '', loadChildren: './pages/pages.module#PagesModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
