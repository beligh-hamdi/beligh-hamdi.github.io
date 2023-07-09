import { ChangeDetectorRef, Component, OnInit, signal } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { filter, flatMap, map, mergeMap, shareReplay } from 'rxjs/operators';
import { Observable, merge, of } from 'rxjs';

import { ConfigModel } from '@models/config.model';
import { AppService } from '@services/app.service';
import { SpinnerService } from '@app/shared/services/spinner.service';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterLink, RouterOutlet } from '@angular/router';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgIf, AsyncPipe, NgClass } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { OnlineStatusModule, OnlineStatusService, OnlineStatusType } from 'ngx-online-status';


const THUMBUP_ICON =
  `
  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.` +
  `44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5` +
  `1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"/>
  </svg>
`;


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  standalone: true,
  imports: [NgIf, MatSidenavModule, SidenavComponent, MatToolbarModule, MatButtonModule,
    OnlineStatusModule, NgClass,
    MatIconModule, RouterLink, MatMenuModule, MatProgressBarModule, RouterOutlet, AsyncPipe]
})
export class LayoutComponent implements OnInit {
  spinnerActive: boolean = true;
  loading$: Observable<boolean> = of(false);

  onlineStatusType = OnlineStatusType;
  lineStatus = signal(this.onlineStatusService.getStatus());

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  appConfig$!: Observable<ConfigModel>;

  constructor(private breakpointObserver: BreakpointObserver,
    private appService: AppService,
    private spinnerService: SpinnerService,
    private router: Router,
    private cd: ChangeDetectorRef,
    iconRegistry: MatIconRegistry, 
    sanitizer: DomSanitizer,
    private onlineStatusService: OnlineStatusService
  ) {
    
    this.onlineStatusService.status.subscribe((status: OnlineStatusType) => {
      this.lineStatus.set(status);
    });

    iconRegistry.addSvgIconLiteral('thumbs-up', sanitizer.bypassSecurityTrustHtml(THUMBUP_ICON));

  }

  ngOnInit(): void {
    this.loading();
    this.appConfig$ = this.appService.getConfig();
  }

  reloadCurrentPage() {
    this.router.navigate([this.router.url]);
    window.location.reload();
  }


  private loading() {
    this.spinnerService.showSpinner.subscribe({
      next: (next) => {
        this.spinnerActive = next;
        this.cd.detectChanges();
      },
      complete: () => {
        this.spinnerActive = false;
      }
    });

    this.loading$ = this.router.events.pipe(
      filter(
        (e) =>
          e instanceof NavigationStart ||
          e instanceof NavigationEnd ||
          e instanceof NavigationCancel ||
          e instanceof NavigationError
      ),
      map((e) => e instanceof NavigationStart),
    );


  }

}
