import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderViewComponent } from '@app/shared/components/header-view/header-view.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { GoogleSheetsComponent } from '@app/shared/components/google-sheets/google-sheets.component';

@Component({
  selector: 'app-expanse',
  standalone: true,
  imports: [CommonModule, HeaderViewComponent, MatCardModule, MatListModule, RouterLinkActive, RouterLink, MatIconModule, GoogleSheetsComponent],
  templateUrl: './expanse.component.html',
  styleUrls: ['./expanse.component.scss']
})
export class ExpanseComponent {

}
