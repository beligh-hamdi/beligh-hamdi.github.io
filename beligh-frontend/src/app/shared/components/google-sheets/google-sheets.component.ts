import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleSheetsService } from './google-sheets.service';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

export interface ElementData {
  name: string;
  cost: number;
}

@Component({
  selector: 'app-google-sheets',
  standalone: true,
  imports: [CommonModule, HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule],
  templateUrl: './google-sheets.component.html',
  styleUrls: ['./google-sheets.component.scss'],
})
export class GoogleSheetsComponent implements OnInit {
  accessToken!: string | any;
  dataSheet: any = [];
  displayedColumns: string[] = ['name', 'cost'];
  dataSource: any;

  constructor(
    private service: GoogleSheetsService,
    private ref: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    if (this.service.getToken()) {
      this.accessToken = this.service.getToken();
    }
  }

  logout() {
    this.service.clearToken();
    this.accessToken = null;
    this.dataSource = null;
    // this.ref.detectChanges();
  }


  getAccessToken(): void {
    this.service.getAccessToken().then((accessToken: any) => {
      this.accessToken = accessToken;
      this.service.setToken(accessToken);
    });
  }

  getGoogleSpreadSheetsData(): void {
   // if (!this.accessToken) return;

    this.service.getGoogleSpreadSheetsData(this.accessToken)
      .subscribe((events: any) => {

       // console.log('events', events);
        this.dataSheet = this.service.convertToArrayOfObjects(events.values);

        this.dataSheet.map((item: any) => {
          item.cost = parseInt(item.cost);
        });

        this.dataSource = this.dataSheet;

        let labels: any[] = [];
        let dataItems: any[] = [];
        this.dataSource.forEach((element: any) => {
          labels.push(element.name);
          dataItems.push(element.cost);
        });

      });
  }

  getTotalCost() {
    if (this.dataSheet) {
      return this.dataSheet.reduce((accumulator: any, currentValue: any) => accumulator + parseInt(currentValue.cost), 0);
    }
  }
}
