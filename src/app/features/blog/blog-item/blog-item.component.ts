import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '@app/shared/services/app.service';
import { Observable, mergeMap } from 'rxjs';
import { DefaultMissingImageDirective } from '../../../shared/directives/default-missing-image/default-missing-image.directive';
import { MatCardModule } from '@angular/material/card';
import { NgIf, AsyncPipe, DatePipe } from '@angular/common';

@Component({
    selector: 'app-blog-item',
    templateUrl: './blog-item.component.html',
    styleUrls: ['./blog-item.component.scss'],
    standalone: true,
    imports: [NgIf, MatCardModule, DefaultMissingImageDirective, AsyncPipe, DatePipe]
})
export class BlogItemComponent {
  articleContent$!: Observable<any>;
  articleDetails$!: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private appService: AppService) { }


  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.articleDetails$ = this.appService.getArticleDetails(+id);
      this.articleContent$ = this.articleDetails$.pipe(
        mergeMap((data) => {
          return this.appService.getBlogArticleContent(data.contentPath);
        })
      );
    }
  }

}
