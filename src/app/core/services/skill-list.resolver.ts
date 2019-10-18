import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SkillListResolver implements Resolve<string[]> {

  constructor() {
  }

  getSkills(): Observable<string[]> {
    return of(['Java', 'Spring', 'Java-Script', 'Angular']).pipe(delay(2000));
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string[]> {
    return this.getSkills();
  }
}
