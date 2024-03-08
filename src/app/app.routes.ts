import { Routes } from '@angular/router';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { NameInputComponent } from './name-input/name-input.component';
import { CalculatorComponent } from './calculator/calculator.component';

export const routes: Routes = [
    { path: 'app-name-input', component: NameInputComponent },
    { path: 'app-calculator', component: CalculatorComponent },
    { path: 'app-transactions', component: TransactionsComponent },
    { path: 'transaction-detail', component: TransactionDetailComponent }

]
    ;


