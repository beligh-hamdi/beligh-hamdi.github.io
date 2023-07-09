import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogItemComponent } from './blog-item/blog-item.component';


@NgModule({
    imports: [
        CommonModule,
        BlogRoutingModule,
        BlogViewComponent,
        BlogItemComponent,
    ]
})
export class BlogModule { }
