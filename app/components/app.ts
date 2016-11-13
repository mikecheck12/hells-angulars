import {Component} from "@angular/core";
import {UIROUTER_DIRECTIVES} from "ui-router-ng2";

@Component({
  selector: 'my-app',
  template: `
  <div class="nav">
    <a class="btn btn-primary" uiSref="home" uiSrefActive="active">Home</a>
    <a uiSref="about" uiSrefActive="active">About</a>
  </div>


  <ui-view></ui-view>
`})
export class App { }
