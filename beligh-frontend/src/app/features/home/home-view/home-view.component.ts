import { Component, OnInit } from '@angular/core';
import { NewsComponent } from '../news/news.component';
import { HeaderViewComponent } from '../../../shared/components/header-view/header-view.component';

@Component({
    selector: 'app-home-view',
    templateUrl: './home-view.component.html',
    styleUrls: ['./home-view.component.scss'],
    standalone: true,
    imports: [HeaderViewComponent, NewsComponent]
})
export class HomeViewComponent implements OnInit {
 
  
  constructor() {}
  

  ngOnInit(): void {
   
  }

  
  

}
