import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable, finalize } from "rxjs"
import { SpinnerService } from "./spinner.service";


@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {

    constructor(private spinnerService: SpinnerService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        this.spinnerService.handleRequest('plus');
        return next
            .handle(req)
            .pipe(
                finalize(this.finalize.bind(this))
            );
    }

    finalize = (): void => this.spinnerService.handleRequest();

}