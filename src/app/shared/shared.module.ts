import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { HeaderPageComponent } from './header-page/header-page.component';
import {MatButtonModule, MatCardModule, MatIconModule, MatListModule} from '@angular/material';
import {TranslateModule} from '@ngx-translate/core';



@NgModule({
  declarations: [UnderConstructionComponent, HeaderPageComponent],
  imports: [
    CommonModule,
    TranslateModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [
    UnderConstructionComponent, HeaderPageComponent
  ]
})
export class SharedModule { }
