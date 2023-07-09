import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExploreRoutingModule } from './explore-routing.module';
import { CanadaViewComponent } from './canada-view/canada-view.component';
import { FranceViewComponent } from './france-view/france-view.component';
import { TunisiaViewComponent } from './tunisia-view/tunisia-view.component';
import { ExploreViewComponent } from './explore-view/explore-view.component';



@NgModule({
    imports: [
        CommonModule,
        ExploreRoutingModule,

        CanadaViewComponent,
        FranceViewComponent,
        TunisiaViewComponent,
        ExploreViewComponent
    ]
})
export class ExploreModule { }
