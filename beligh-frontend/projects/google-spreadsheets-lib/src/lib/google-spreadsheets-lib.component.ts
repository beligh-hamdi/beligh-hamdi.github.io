import { Component } from '@angular/core';
import { GoogleSpreadsheetsLibService } from './google-spreadsheets-lib.service';

export interface ElementData {
  name: string;
  cost: number;
}

@Component({
  selector: 'app-google-spreadsheets-lib',
  template: `
  
 
    <section>

    <article>
       <!--  <h1>Spread Sheets</h1>
        <p>Access Token: {{ accessToken }}</p> -->

        <button mat-button (click)="getAccessToken()">Token</button>
        <button mat-button [disabled]="!accessToken" (click)="getGoogleSpreadSheetsData()">Load</button>
    </article>



    <div *ngIf="dataSource">

      <table mat-table [dataSource]="dataSource" class="mat-elevation-z8">

        <!-- Name Column -->
        <ng-container matColumnDef="name">
          <th mat-header-cell *matHeaderCellDef> Name </th>
          <td mat-cell *matCellDef="let element"> {{element.name}} </td>
        </ng-container>
      
        <!-- Cost Column -->
        <ng-container matColumnDef="cost">
          <th mat-header-cell *matHeaderCellDef> Cost </th>
          <td mat-cell *matCellDef="let element"> {{element.cost | currency}} </td>
        </ng-container>
      
        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
      </table>

        
    </div>
  
      

    </section>



  `,
  styles: [
    `
    table {
      width: 100%;
    }
  
  `
  ]
})
export class GoogleSpreadsheetsLibComponent {
  accessToken!: string;
  dataSheet: any = [];
  total = 0;
  displayedColumns: string[] = ['name', 'cost'];
  dataSource: any;

  constructor(
    private service: GoogleSpreadsheetsLibService) {
  }


  getAccessToken(): void {
    this.service.getAccessToken().then((accessToken: any) => this.accessToken = accessToken);
  }

  getGoogleSpreadSheetsData(): void {
    if (!this.accessToken) return;


    this.service.getGoogleSpreadSheetsData(this.accessToken)
      .subscribe((events: any) => {
        ;
        console.log('events', events);
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


        const initialValue = 0;
        this.total = this.dataSheet.reduce(
          (accumulator: any, currentValue: any) => accumulator + parseInt(currentValue.cost), initialValue
        );

        console.log('total', this.total);
      });
  }


}
