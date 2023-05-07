import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable, catchError, throwError } from "rxjs"
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(private snackBar: MatSnackBar) {}



    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            catchError(err => {
                if ([401, 403].includes(err.status)) {
                    // auto logout if 401 or 403 response returned from api
                    // this.accountService.logout();
                }

                const error =  err.error?.error || err.error?.message || err.statusText ;
                this.snackBar.open(error?.message, error?.status || err.status);
                console.error(error);
            return throwError(error);
            }
        ));
    }

}