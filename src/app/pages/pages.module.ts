import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CvComponent } from './cv/cv.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {TranslateModule} from '@ngx-translate/core';
import {MatCardModule, MatListModule} from '@angular/material';

@NgModule({
  declarations: [HomeComponent, AboutComponent, ContactComponent, CvComponent, PageNotFoundComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    TranslateModule,

    MatCardModule,
    MatListModule
  ]
})
export class PagesModule { }
