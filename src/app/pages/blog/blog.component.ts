import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {CoreService} from '../../core/services/core.service';
import {map, mergeAll} from 'rxjs/operators';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogComponent implements OnInit {
  status = { isLoadingPosts: false, isLoadingStaticPosts: false };

  posts = [];
  page = 1;
  limit = 5;
  totalCount: number;

  staticPosts = [];
  staticPostPage = 1;
  maxStaticPages: number;

  constructor(private coreService: CoreService,
              private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.getPosts(this.page, this.limit);
    this.getStaticPosts(1);
  }

  private getStaticPosts(staticPostPage: number) {
    this.status = Object.assign(this.status, {isLoadingStaticPosts: true });
    this.coreService.getStaticPosts(staticPostPage).pipe(
      mergeAll()
    ).subscribe((data: any) => {
      this.staticPosts = [...this.staticPosts, data];
    }, (error: any) => {
      if (error.status === 404) {
        this.maxStaticPages = this.staticPostPage - 1;
        this.status = Object.assign(this.status, {isLoadingStaticPosts: false });
        this.changeDetectorRef.detectChanges();
      }
    }, () => {
      this.status = Object.assign(this.status, {isLoadingStaticPosts: false });
      this.changeDetectorRef.detectChanges();
      this.staticPostPage++;
    });
  }

  private getPosts(page: number = 1, limit: number = 5) {
    this.status = Object.assign(this.status, {isLoadingPosts: true });
    this.coreService.getPosts(page, limit).pipe(
      map(resp => {
        const keys = resp.headers.keys();
        const headers = keys.map(key => `${key} ${resp.headers.get(key)}`);
        this.totalCount = +`${resp.headers.get('x-total-count')}`;
        return resp.body;
      }),
      mergeAll()
    ).subscribe((data: any) => {
      this.posts = [...this.posts, data];
    }, (error: any) => {

    }, () => {
      this.status = Object.assign(this.status, {isLoadingPosts: false });
      this.changeDetectorRef.detectChanges();
      this.page++;
    });
  }

  onScroll() {
    if (this.posts.length < this.totalCount) {
      this.getPosts(this.page, this.limit);
    }
  }

  onScrollStatic() {
    if (!this.maxStaticPages) {
      this.getStaticPosts(this.staticPostPage);
    }
  }

}
