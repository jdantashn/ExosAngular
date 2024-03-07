import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NameInputComponent } from './name-input/name-input.component';
import { CalculatorComponent } from './calculator/calculator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NameInputComponent,CalculatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Exos Angular';
}
