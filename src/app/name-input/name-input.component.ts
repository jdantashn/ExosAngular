import { Component } from '@angular/core';
import { Person } from '../person';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-name-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './name-input.component.html',
  styleUrl: './name-input.component.css'
})




export class NameInputComponent {
  person: Person = {
    name: '',
    fontFamily: 'serif',
    fontSize: 20,
    alignmentLeft: true,
    alignmentCenter: false,
    alignmentRight: false,
    alignment: 'left'
  };
  updateAlignment(clickedOption: string) {
    this.person.alignment = clickedOption;
    switch (clickedOption) {
      case 'left': {
        this.person.alignmentLeft = true;
        this.person.alignmentCenter = false;
        this.person.alignmentRight = false;
        break;
      }
      case 'center': {
        this.person.alignmentLeft = false;
        this.person.alignmentCenter = true;
        this.person.alignmentRight = false;
        break;
      }
      case 'right': {
        this.person.alignmentLeft = false;
        this.person.alignmentCenter = false;
        this.person.alignmentRight = true;
        break;
      }
      default: {
        //statements; 
        break;
      }
    }
  }
}
