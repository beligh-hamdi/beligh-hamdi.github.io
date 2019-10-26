import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {CoreService} from '../../core/services/core.service';
import {map, mergeAll} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  status = { isLoadingNews: false };
  news: any = [];

  constructor(private coreService: CoreService,
              private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.getNews();
  }

  private getNews() {
    this.status = Object.assign(this.status, {isLoadingNews: true });
    this.coreService.getNews().pipe(
      map(body => {
        return body.articles;
      }),
      mergeAll()
    ).subscribe((data: any) => {
      this.news = [...this.news, data];
    }, (error: any) => {

    }, () => {
      this.status = Object.assign(this.status, {isLoadingNews: false });
      this.changeDetectorRef.detectChanges();
    });
  }

}
