import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { BlogEditorComponent } from './blog-editor/blog-editor.component';
@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule,
        AdminPageComponent,
        BlogEditorComponent,
    ],
    providers: [
        
    ]
})
export class AdminModule { }
