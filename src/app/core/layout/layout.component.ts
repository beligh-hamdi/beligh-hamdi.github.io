import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Router} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  currentRoute: any;

  links = [
    { path: '/home', title: 'Home', icon: 'home', class: '#3f51b5' },
    { path: '/about', title: 'About', icon: 'person', class: '#b57557' },
    { path: '/contact', title: 'Contact', icon: 'email', class: '#8f5cb5' },
    { path: '/cv', title: 'CV', icon: 'school', class: '#b52f35' },
  ];

  constructor(private breakpointObserver: BreakpointObserver,
              private location: Location,
              private router: Router) {
    this.routerEvent();
  }

  private routerEvent() {
    this.router.events.subscribe(val => {
      if (this.location.path() !== '') {
       // this.currentRoute = this.location.path();
        this.currentRoute =  this.links.find(item => {
           return item.path === this.location.path();
        });
      } else {
       // this.currentRoute = 'Home';
        this.currentRoute = { path: '/home', title: 'Home', icon: 'home', class: '#3f51b5' };
      }
    });
  }

}
