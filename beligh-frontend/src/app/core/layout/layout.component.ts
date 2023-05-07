import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { filter, flatMap, map, mergeMap, shareReplay } from 'rxjs/operators';
import { Observable, merge, of } from 'rxjs';

import { ConfigModel } from '@models/config.model';
import { AppService } from '@services/app.service';
import { SpinnerService } from '@app/shared/services/spinner.service';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterLink, RouterOutlet } from '@angular/router';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgIf, AsyncPipe } from '@angular/common';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  standalone: true,
  imports: [NgIf, MatSidenavModule, SidenavComponent, MatToolbarModule, MatButtonModule, MatIconModule, RouterLink, MatMenuModule, MatProgressBarModule, RouterOutlet, AsyncPipe]
})
export class LayoutComponent implements OnInit {
  spinnerActive: boolean = true;
  loading$: Observable<boolean> = of(false);

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
    private cd: ChangeDetectorRef
  ) { }



  ngOnInit(): void {
    this.loading();
    this.appConfig$ = this.appService.getConfig();
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
