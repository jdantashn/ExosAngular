import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionDataService } from '../transaction-data.service';
import { TransactionRecord } from '../transaction-record';


@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css'
})
export class TransactionsComponent {

  dataList: TransactionRecord[] = [];
  ascendingsort: boolean = true;
  constructor(private TransactionDataService: TransactionDataService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.TransactionDataService.getTransactionData().subscribe(data => {
      this.dataList = data;
    });
  }

  onSort(column: string) {

    switch(column) { 
      case 'id': { 
         if(this.ascendingsort){
          // descending
          this.dataList.sort((a, b) => (a.id > b.id ? -1 : 1));
         }
         else{
          this.dataList.sort((a, b) => (a.id < b.id ? -1 : 1));
         }
         this.ascendingsort = !this.ascendingsort;
         break; 
      } 
      case 'label': { 
        if(this.ascendingsort){
          // descending
          this.dataList.sort((a, b) => (a.label > b.label ? -1 : 1));
         }
         else{
          this.dataList.sort((a, b) => (a.label < b.label ? -1 : 1));
         }
         this.ascendingsort = !this.ascendingsort;
         break; 
      } 
      case 'amount': { 
        if(this.ascendingsort){
          // descending
          this.dataList.sort((a, b) => (a.amount > b.amount ? -1 : 1));
         }
         else{
          this.dataList.sort((a, b) => (a.amount < b.amount ? -1 : 1));
         }
         this.ascendingsort = !this.ascendingsort;
         break; 
      } 
      case 'balance': { 
        if(this.ascendingsort){
          // descending
          this.dataList.sort((a, b) => (a.balance > b.balance ? -1 : 1));
         }
         else{
          this.dataList.sort((a, b) => (a.balance < b.balance ? -1 : 1));
         }
         this.ascendingsort = !this.ascendingsort;
         break; 
      } 
      case 'date': { 
        if(this.ascendingsort){
          // descending
          this.dataList.sort((a, b) => (a.date > b.date ? -1 : 1));
         }
         else{
          this.dataList.sort((a, b) => (a.date < b.date ? -1 : 1));
         }
         this.ascendingsort = !this.ascendingsort;
         break; 
      } 
      default: { 
         //statements; 
         break; 
      } 
   } 


  


  }

}
