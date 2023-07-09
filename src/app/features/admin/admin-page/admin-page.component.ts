import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLinkActive, RouterLink } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { HeaderViewComponent } from '../../../shared/components/header-view/header-view.component';


@Component({
    selector: 'app-admin-page',
    templateUrl: './admin-page.component.html',
    styleUrls: ['./admin-page.component.scss'],
    standalone: true,
    imports: [HeaderViewComponent, MatCardModule, MatListModule, RouterLinkActive, RouterLink, MatIconModule]
})
export class AdminPageComponent {

}
