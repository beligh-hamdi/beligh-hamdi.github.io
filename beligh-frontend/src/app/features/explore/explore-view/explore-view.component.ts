import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { NgFor } from '@angular/common';
import { HeaderViewComponent } from '@app/shared/components/header-view/header-view.component';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-explore-view',
    templateUrl: './explore-view.component.html',
    styleUrls: ['./explore-view.component.scss'],
    standalone: true,
    imports: [NgFor, MatCardModule, HeaderViewComponent, RouterModule]
})
export class ExploreViewComponent {
  
  datasource = [
    { name: 'Canada', img: 'assets/img/flags/canada225.png', link: 'canada' },
    { name: 'France', img: 'assets/img/flags/france225.png', link: 'france' },
    { name: 'Tunisia', img: 'assets/img/flags/tunisia225.png', link: 'tunisia' }
  ];

}
