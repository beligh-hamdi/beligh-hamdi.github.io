import {Component, Inject, OnInit} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';
import { Location } from '@angular/common';
import {TranslateService} from '@ngx-translate/core';
import {CoreService} from '../services/core.service';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  loading: boolean = false;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  currentRoute: any;
  links: any = [];
  title: string = '';
  logo: string = '';
  fullScreen: boolean = false;
  elem: any;

  constructor(private breakpointObserver: BreakpointObserver,
              private location: Location,
              private router: Router,
              public translate: TranslateService,
              private coreService: CoreService,
              iconRegistry: MatIconRegistry,
              sanitizer: DomSanitizer,
              @Inject(DOCUMENT) private document: any) {
    this.routerEvent();
    this.initTranslate();

    iconRegistry.addSvgIcon(
      'flag-united-kingdom',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/flags/united-kingdom-flag.svg'));

    iconRegistry.addSvgIcon(
      'flag-france',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/flags/france-flag.svg'));

    this.elem = document.documentElement;
    document.onfullscreenchange = () => this.detectFullscreen();
  }

  ngOnInit(): void {
    this.coreService.getConfig().subscribe(data => {
        this.links = data.links;
        this.title = data.title;
        this.logo = data.logo;
    });
  }

  toggleFullscreen(): void {
    if (!this.fullScreen) {
      this.fullScreen = true;
      if (this.elem.requestFullscreen) {
        this.elem.requestFullscreen();
      } else if (this.elem.mozRequestFullScreen) {
        /* Firefox */
        this.elem.mozRequestFullScreen();
      } else if (this.elem.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        this.elem.webkitRequestFullscreen();
      } else if (this.elem.msRequestFullscreen) {
        /* IE/Edge */
        this.elem.msRequestFullscreen();
      }
    } else {
      this.fullScreen = false;
      if (this.document.exitFullscreen) {
        this.document.exitFullscreen();
      } else if (this.document.mozCancelFullScreen) {
        /* Firefox */
        this.document.mozCancelFullScreen();
      } else if (this.document.webkitExitFullscreen) {
        /* Chrome, Safari and Opera */
        this.document.webkitExitFullscreen();
      } else if (this.document.msExitFullscreen) {
        /* IE/Edge */
        this.document.msExitFullscreen();
      }
    }
  }

  detectFullscreen(): void {
    if (this.document.exitFullscreen || 
      this.document.mozCancelFullScreen ||
      this.document.webkitExitFullscreen ||
      this.document.msExitFullscreen
      ) {
      this.fullScreen = true;
    }

    if (this.elem.requestFullscreen || 
      this.elem.mozRequestFullScreen ||
      this.elem.webkitRequestFullscreen ||
      this.elem.msRequestFullscreen
      ) {
      this.fullScreen = false;
    }
  }

  private routerEvent() {
    this.router.events.subscribe((event: Event) => {
      if (this.location.path() !== '') {
        this.currentRoute =  this.links.find((item: any) => {
          return item.path === this.location.path();
        });
      } else {
        this.currentRoute = this.links.find((item: any) => {
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
