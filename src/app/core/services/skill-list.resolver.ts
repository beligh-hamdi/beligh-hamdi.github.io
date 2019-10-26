import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { delay } from 'rxjs/operators';
import {CoreService} from './core.service';

@Injectable({
  providedIn: 'root'
})
export class SkillListResolver implements Resolve<string[]> {

  constructor(private coreService: CoreService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string[]> {
    return this.coreService.getSkills();
  }
}
