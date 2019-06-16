import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Router} from '@angular/router';
import { Location } from '@angular/common';
import {TranslateService} from '@ngx-translate/core';


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
    { path: '/about', title: 'About', icon: 'person', class: '#673ab7' },
    { path: '/contact', title: 'Contact', icon: 'email', class: '#9c27b0' },
    { path: '/cv', title: 'CV', icon: 'school', class: '#e91e63' },
  ];



  constructor(private breakpointObserver: BreakpointObserver,
              private location: Location,
              private router: Router,
              public translate: TranslateService) {
    this.routerEvent();

    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
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
