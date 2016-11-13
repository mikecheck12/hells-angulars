import {Component} from '@angular/core';

@Component({  
  template: `
  <h3>{{greeting}} galaxy!</h3>
  <button (click)="toggleGreeting()">toggle greeting</button>
`})
export class Home { 
  greeting = "hello";
  toggleGreeting() {
    this.greeting = this.greeting === 'hello' ? 'whats up' : 'hello';
  }
}