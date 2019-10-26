import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { LayoutModule } from '@angular/cdk/layout';

import { RouterModule } from '@angular/router';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import {FlexLayoutModule} from '@angular/flex-layout';

import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatSelectModule,
  MatProgressBarModule, MatTooltipModule
} from '@angular/material';
import {ngxLoadingAnimationTypes, NgxLoadingModule} from 'ngx-loading';
import {environment} from '../../environments/environment';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, '/assets/i18n/', '.json?cacheBuster=' + environment.cacheBusterHash);
}

const ngxLoadingModuleConfig = {
  // animationType: ngxLoadingAnimationTypes.rotatingPlane,
  backdropBackgroundColour: '#ffffff',
  // backdropBorderRadius: '4px',
  primaryColour: 'rgb(233, 30, 99)',
  secondaryColour: 'rgb(63, 81, 181)',
  tertiaryColour: 'rgb(233, 30, 99)'
};

@NgModule({
  declarations: [LayoutComponent],
  exports: [LayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSelectModule,
    MatProgressBarModule,
    MatTooltipModule,

    FlexLayoutModule,
    NgxLoadingModule.forRoot(ngxLoadingModuleConfig),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ]
})
export class CoreModule { }
