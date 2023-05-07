import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutViewComponent } from './about-view/about-view.component';

@NgModule({
    imports: [
        CommonModule,
        AboutRoutingModule,
        AboutViewComponent,
    ]
})
export class AboutModule { }
