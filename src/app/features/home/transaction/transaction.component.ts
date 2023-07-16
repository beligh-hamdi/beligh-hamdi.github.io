import { Component } from '@angular/core';
import { AppService } from '@app/shared/services/app.service';
import { map, Observable, filter, mergeAll } from 'rxjs';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss'],
  standalone: true,
  imports: [CommonModule, DatePipe]
})
export class TransactionComponent {

  items$!: Observable<any>;

  constructor(private appService: AppService) { }

  ngOnInit(): void {

    this.items$ = this.appService.getTransactions().pipe(
      map((item: any) => item.Transaction),
     // mergeAll()
    );

  }


}
