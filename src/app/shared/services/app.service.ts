import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, filter, map, mergeAll, take } from 'rxjs';
import { ConfigModel } from '../models/config.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getNews(searchKey: string = 'java'): Observable<any> {
    // https://newsapi.org/v2/everything?q=technology&apiKey=859a8612753c41a9a94196ade4876853
    // if(environment.production) {
    return this.http.get<any>(`assets/data/news.json`);
   //   );
   // }
   // return this.http.get<any>(`https://newsapi.org/v2/everything?q=${searchKey}&apiKey=${environment.newApiKey}`);
  }


  getConfig(): Observable<ConfigModel> {
    return this.http.get<ConfigModel>(`${environment.apiUrl}assets/data/config.json`);
  }

  getBlogArticleContent(contentPath: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}assets/data/blog/${contentPath}`, { responseType: 'text' });
  }

  getBlogArticles(): Observable<any> {
    return this.http.get(`${environment.apiUrl}assets/data/blog/blog.json`);
  }

  getTransactions(): Observable<any> {
    return this.http.get(`${environment.apiUrl}assets/data/transaction.json`);
  }

  getArticleDetails(id: number): Observable<any> {
    return this.getBlogArticles().pipe(
      map(item => item.articles),
      mergeAll(),
      filter((item: any) => item.id == id),
      take(1)
    );
  }

  paginator(items: any, page: number = 1, per_page: number = 10) {
    let offset: number = (page - 1) * per_page;

    let paginatedItems = items.slice(offset).slice(0, per_page);
    let total_pages: number = Math.ceil(items.length / per_page);
    return {
      page: page,
      per_page: per_page,
      pre_page: page - 1 ? page - 1 : null,
      next_page: (total_pages > page) ? page + 1 : null,
      total: items.length,
      total_pages: total_pages,
      data: paginatedItems
    };
  }


}
