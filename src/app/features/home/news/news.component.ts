import { Component, OnInit } from '@angular/core';
import { AppService } from '@app/shared/services/app.service';
import { Observable, filter, map, mergeAll } from 'rxjs';
import { DefaultMissingImageDirective } from '../../../shared/directives/default-missing-image/default-missing-image.directive';
import { MatCardModule } from '@angular/material/card';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgIf, NgFor, AsyncPipe, SlicePipe, DatePipe, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  standalone: true,
  imports: [NgIf, InfiniteScrollModule, NgFor, MatCardModule, DefaultMissingImageDirective, AsyncPipe, SlicePipe, DatePipe, 
    NgOptimizedImage
  ]
})
export class NewsComponent implements OnInit {
  items$!: Observable<any>;
  allItems: any[] = [];
  items: any = [];
  selector: string = ".main-panel";

  throttle = 0;
  distance = 2;
  page = 1;
  perPage = 100;

  ngSrcset = '640w, 750w, 828w, 1080w, 1200w, 1920w, 2048w, 3840w';
  defaultImage = 'assets/img/no-image-icon.png';

  constructor(private appService: AppService) { }


  ngOnInit(): void {

    this.items$ = this.appService.getNews().pipe(
        map((item: any) => item.articles),
        mergeAll(),
        filter((item: any) => item.urlToImage !== null)
      );

    this.items$.subscribe({
      next: (data: any) => {
        if (data) {
          this.allItems = data;
        //  this.items = this.appService.paginator(this.allItems, this.page, this.perPage);
          this.items.push(data);
        }
      }
    });

  }

  onScroll(): void {
    if (this.page < this.items.total_pages) {
      this.items = this.appService.paginator(this.allItems, ++this.page, this.perPage);
    }
  }

  trackByFn(index: number, item: any) {
    return item.title;
  }

}
