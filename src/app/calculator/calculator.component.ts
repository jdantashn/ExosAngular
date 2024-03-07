import { Component } from '@angular/core';
import { Calculator } from '../calculator';
import { FormsModule } from '@angular/forms';
import { OperationHistory } from '../operation-history';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  calculator: Calculator = {
    num1: 0,
    num2: 0,
    operator: "+",
    result: 0
  };

  operationHistoryData: OperationHistory[] = []

  calculate() {
    switch (this.calculator.operator) {
      case '+': {
        this.calculator.result = +this.calculator.num1 + +this.calculator.num2;
        break;
      }
      case '-': {
        this.calculator.result = +this.calculator.num1 - +this.calculator.num2;
        break;
      }
      case '*': {
        this.calculator.result = +this.calculator.num1 * +this.calculator.num2;
        break;
      }
      case '/': {
        this.calculator.result = +this.calculator.num1 / +this.calculator.num2;
        break;

      }
    }
    var operationHistoryRecord: OperationHistory = {
      dateTime: new Date(),
      requestedOperation: this.calculator.num1 + this.calculator.operator + this.calculator.num2,
      operationResult: this.calculator.result
    }
    this.operationHistoryData.push(operationHistoryRecord);
  }

  onDeleteOperationHistory(index: number){
    this.operationHistoryData.splice(index,1);
  }

}
