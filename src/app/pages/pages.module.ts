import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {TranslateModule} from '@ngx-translate/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';

import {NgxLoadingModule} from 'ngx-loading';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {ScrollingModule} from '@angular/cdk/scrolling';

import {InfiniteScrollModule as CustomInfiniteScrollModule } from './../shared/infinite-scroll/infinite-scroll.module';
import {SharedModule} from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    RouterModule,
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
  ],
  exports: [
    
    RouterModule,
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
  ],
})
export class PagesModule { }
