import { NgModule } from '@angular/core';
import { GoogleSpreadsheetsLibComponent } from './google-spreadsheets-lib.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
// import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from '@abacritt/angularx-social-login';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

import { GoogleInitOptions } from '@abacritt/angularx-social-login';

const scopeSpreadsheets = 'https://www.googleapis.com/auth/spreadsheets.readonly';
export const clientId = '707370833063-0dk5mgcdiot7b5j7kg8d0v6hj5ctl272.apps.googleusercontent.com';

export const googleLoginOptions: GoogleInitOptions = {
    oneTapEnabled: false, // default is true
    scopes: [scopeSpreadsheets]
}; // https://developers.google.com/identity/oauth2/web/guides/use-token-model#initialize_a_token_client


@NgModule({
  declarations: [
    GoogleSpreadsheetsLibComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  //  SocialLoginModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule
  ],
  exports: [
    GoogleSpreadsheetsLibComponent
  ],
  providers: [
    /* {
      provide: 'SocialAuthServiceConfig',
      // multi: true,
      useValue: {
        autoLogin: true,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(clientId, googleLoginOptions)
          }
        ],
        onError: (err: any) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    } */
]
})
export class GoogleSpreadsheetsLibModule { }
