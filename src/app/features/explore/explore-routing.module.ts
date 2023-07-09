import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExploreViewComponent } from './explore-view/explore-view.component';
import { CanadaViewComponent } from './canada-view/canada-view.component';
import { FranceViewComponent } from './france-view/france-view.component';
import { TunisiaViewComponent } from './tunisia-view/tunisia-view.component';

const routes: Routes = [
  { path: '', component: ExploreViewComponent },
  { path: 'canada', component: CanadaViewComponent },
  { path: 'france', component: FranceViewComponent },
  { path: 'tunisia', component: TunisiaViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExploreRoutingModule { }
