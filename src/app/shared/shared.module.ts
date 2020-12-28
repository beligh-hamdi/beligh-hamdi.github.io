import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { HeaderPageComponent } from './header-page/header-page.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {TranslateModule} from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [UnderConstructionComponent, HeaderPageComponent],
  imports: [
    CommonModule,
    TranslateModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,

    FlexLayoutModule
  ],
  exports: [
    UnderConstructionComponent, 
    HeaderPageComponent
  ]
})
export class SharedModule { }
