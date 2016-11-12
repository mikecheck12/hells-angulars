import {Component} from "@angular/core";
import {UIROUTER_DIRECTIVES} from "ui-router-ng2";

@Component({
  selector: 'my-app',
  directives: [UIROUTER_DIRECTIVES],
  template: `
  <div class="nav">
    <a uiSref="hello" uiSrefActive="active">Hello</a>
    <a uiSref="about" uiSrefActive="active">About</a>
  </div>
  
  <ui-view></ui-view>
`})
export class App { }
