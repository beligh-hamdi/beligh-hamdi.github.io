import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
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
