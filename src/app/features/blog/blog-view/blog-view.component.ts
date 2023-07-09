import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AppService } from '@services/app.service';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DefaultMissingImageDirective } from '../../../shared/directives/default-missing-image/default-missing-image.directive';
import { MatCardModule } from '@angular/material/card';
import { NgIf, NgFor, AsyncPipe, SlicePipe, DatePipe } from '@angular/common';
import { HeaderViewComponent } from '../../../shared/components/header-view/header-view.component';

@Component({
    selector: 'app-blog-view',
    templateUrl: './blog-view.component.html',
    styleUrls: ['./blog-view.component.scss'],
    standalone: true,
    imports: [HeaderViewComponent, NgIf, NgFor, MatCardModule, DefaultMissingImageDirective, MatButtonModule, MatIconModule, AsyncPipe, SlicePipe, DatePipe]
})
export class BlogViewComponent implements OnInit {

  articles$!: Observable<any[]>;


  constructor(private appService: AppService, private router: Router) {}
  

  ngOnInit(): void {
    this.articles$ = this.appService.getBlogArticles().pipe(map((data:any ) => data.articles));
  }

  trackByFn(index: number, item: any) {
    return item.id;
  }

  openMore(id: string) {
    this.router.navigate([`/blog/post/`, id]);
  }
}
