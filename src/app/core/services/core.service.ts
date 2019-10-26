import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(private http: HttpClient) { }

  getConfig(): Observable<any> {
    return this.http.get(`assets/data/config.json?cacheBuster=${environment.cacheBusterHash}`);
  }

  getSkills(): Observable<string[]> {
    return of(this.generateSkills()).pipe(delay(2000));
  }

  getSkills1(): Observable<string[]> {
    return of(this.generateSkills()).pipe(delay(4000));
  }

  getPosts(page: number, limit: number): Observable<any> {
    return this.http.get(`//jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`, { observe: 'response' })
      .pipe(delay(4000));
  }

  getStaticPosts(posts: number): Observable<any> {
    return this.http.get(`assets/data/posts/posts${posts}.json?cacheBuster=${environment.cacheBusterHash}`)
      .pipe(delay(4000));
  }

  getNews(): Observable<any> {
    return this.http.get(`assets/data/news.json?cacheBuster=${environment.cacheBusterHash}`)
      .pipe(delay(4000));
  }

  private generateSkills(): Array<string> {
    return [
      'Java',
      'Spring Framework',
      'JavaScript',
      'TypeScript',
      'Angular',
      'NodeJS',
      'Docker',
      'MongoDB',
      'Agile Scrum',
      'Jenkins',
      'Maven'
    ];
  }

}
