import {Component, OnInit} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';
import { Location } from '@angular/common';
import {TranslateService} from '@ngx-translate/core';
import {CoreService} from '../services/core.service';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  loading = false;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  currentRoute: any;

  links = [];
  title: string;
  logo: string;

  constructor(private breakpointObserver: BreakpointObserver,
              private location: Location,
              private router: Router,
              public translate: TranslateService,
              private coreService: CoreService,
              iconRegistry: MatIconRegistry,
              sanitizer: DomSanitizer) {
    this.routerEvent();
    this.initTranslate();

    iconRegistry.addSvgIcon(
      'flag-united-kingdom',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/flags/united-kingdom-flag.svg'));

    iconRegistry.addSvgIcon(
      'flag-france',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/flags/france-flag.svg'));

  }

  ngOnInit(): void {
    this.coreService.getConfig().subscribe(data => {
        this.links = data.links;
        this.title = data.title;
        this.logo = data.logo;
    });
  }

  private routerEvent() {
    this.router.events.subscribe((event: Event) => {
      if (this.location.path() !== '') {
        this.currentRoute =  this.links.find(item => {
          return item.path === this.location.path();
        });
      } else {
        this.currentRoute = this.links.find(item => {
          return item.title === 'Home';
        });
      }

      switch (true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.loading = false;
          break;
        }
        default: {
          break;
        }
      }
    });
  }

  private initTranslate() {
    this.translate.addLangs(['en', 'fr']);
    this.translate.setDefaultLang('en');

    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }

}
