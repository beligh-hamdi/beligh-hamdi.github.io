import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable, finalize } from "rxjs"
import { GoogleSheetsService } from "../components/google-sheets/google-sheets.service";
import { environment } from "src/environments/environment";



@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(private googleSheetsService: GoogleSheetsService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const token = this.googleSheetsService.getToken();
        const isApiUrl = request.url.startsWith(environment.googleSheets.apiUrl);
        if (token && isApiUrl) {
            request = request.clone({
                setHeaders: { Authorization: `Bearer ${token}` }
            });
        }

        return next.handle(request);
    }

}