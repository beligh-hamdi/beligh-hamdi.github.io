import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable, of, tap } from "rxjs"
import { environment } from "src/environments/environment";


@Injectable()
export class ApiCacheInterceptor implements HttpInterceptor {
    private cache: Map<string, HttpResponse<any>> = new Map();

    private endpointsToCache = new Set([
        'assets/data/config.json',
        'assets/data/blog/blog.json',
        'assets/data/news.json'
    ]);

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const url = req.url.replace(environment.apiUrl, '');

        if (this.endpointsToCache.has(url)) {
            const cacheResponse = this.cache.get(req.url);

            if (cacheResponse) {
                return of(cacheResponse);
            }

            return next.handle(req).pipe(
                tap((response: any) => {
                    if (response instanceof HttpResponse) {
                        this.cache.set(req.url, response);
                    }
                })
            );
        }

        return next.handle(req);
    }


}