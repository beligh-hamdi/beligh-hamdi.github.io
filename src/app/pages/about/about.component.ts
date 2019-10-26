import {
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';
import {CoreService} from '../../core/services/core.service';
import {defaultIfEmpty, map, mergeAll} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent implements OnInit {
  isLoading$: Observable<boolean>;

  loading: boolean;
  skills: string[];

  status = { isLoading: false, isLoadingPosts: false };
  skills1: string[] = [];
  skills$: Observable<any>;

  constructor(private coreService: CoreService,
              private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.skills$ = this.coreService.getSkills().pipe(
      defaultIfEmpty([])
    );

    this.getSkills();
    this.getSkills1();
  }

  private getSkills() {
    this.loading = true;
    this.coreService.getSkills().subscribe(data => {
      this.skills = data;
    }, (error: any) => {

    }, () => {
      this.loading = false;
    });
  }

  private getSkills1() {
    this.status = Object.assign(this.status, {isLoading: true });
    this.coreService.getSkills1().pipe(
      mergeAll()
    ).subscribe(data => {
      this.skills1 = [...this.skills1, data];
    }, (error: any) => {

    }, () => {
      this.status = Object.assign(this.status, {isLoading: false });
      this.changeDetectorRef.detectChanges();
    });
  }
}
