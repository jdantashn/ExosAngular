import { Component } from "@angular/core";
import { RouterLinkActive, RouterOutlet } from '@angular/router';
import { NameInputComponent } from './name-input/name-input.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { RouterLink } from '@angular/router';
import {Subscription } from "rxjs";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  RouterOutlet,
              NameInputComponent,
              CalculatorComponent, 
              TransactionsComponent, 
              TransactionDetailComponent,
              RouterLink,
              RouterLinkActive
            ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Exos Angular';


  time = new Date();
  intervalId = 0;
  subscription: Subscription = new Subscription();

  ngOnInit() {
    // Using Basic Interval
    this.intervalId = +setInterval(() => {
      this.time = new Date();
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
