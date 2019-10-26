import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CvComponent } from './cv/cv.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {TranslateModule} from '@ngx-translate/core';
import {MatButtonModule, MatCardModule, MatDividerModule, MatExpansionModule, MatIconModule, MatListModule} from '@angular/material';
import {NgxLoadingModule} from 'ngx-loading';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {ScrollingModule} from '@angular/cdk/scrolling';

import {InfiniteScrollModule as CustomInfiniteScrollModule } from './../shared/infinite-scroll/infinite-scroll.module';
import { BlogComponent } from './blog/blog.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [HomeComponent, AboutComponent, ContactComponent, CvComponent, PageNotFoundComponent, BlogComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    TranslateModule,

    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatDividerModule,

    SharedModule,

    NgxLoadingModule,
    InfiniteScrollModule,
    ScrollingModule,
    CustomInfiniteScrollModule
  ]
})
export class PagesModule { }
