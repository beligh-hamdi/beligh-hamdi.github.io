import { environment } from './environments/environment';
import { enableProdMode, isDevMode, importProvidersFrom, LOCALE_ID } from '@angular/core';
import { AppComponent } from './app/app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app/app-routing.module';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { clientId, googleLoginOptions } from './app/shared/components/google-sheets/google-sheets.service';
import { GoogleLoginProvider, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { ErrorInterceptor } from './app/shared/services/error.intercepter';
import { JwtInterceptor } from './app/shared/services/jwt.intercepter';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApiCacheInterceptor } from '@services/api-cache.intercepter';
import { SpinnerInterceptor } from '@app/shared/services/spinner.intercepter';


import { registerLocaleData } from '@angular/common';
import localeFrCa from '@angular/common/locales/fr-CA';
import localeFrCaExtra from '@angular/common/locales/extra/fr-CA';

registerLocaleData(localeFrCa, localeFrCaExtra);


if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(
            BrowserModule, 
            AppRoutingModule, 
            MatSnackBarModule, 
            HttpClientModule,
            ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: !isDevMode(),
            // Register the ServiceWorker as soon as the application is stable
            // or after 30 seconds (whichever comes first).
            registrationStrategy: 'registerWhenStable:30000'
        })),
        { provide: LOCALE_ID, useValue: 'fr-CA'},
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        {
            provide: 'SocialAuthServiceConfig',
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
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ApiCacheInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: SpinnerInterceptor,
            multi: true
        },
        provideAnimations()
    ]
})
  .catch(err => console.error(err));
