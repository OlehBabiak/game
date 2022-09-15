import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
oddElements: number[] = [];
evenElements: number[] = [];

  onValueCreate(value: number) {
    console.log(this.evenElements)
    value % 2 === 0 ? this.evenElements.push(value) : this.oddElements.push(value)
  }

  onValueReset() {
    this.oddElements = [];
    this.evenElements = []
  }
}
