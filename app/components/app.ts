import {Component} from "@angular/core";
import {UIROUTER_DIRECTIVES} from "ui-router-ng2";

@Component({
  selector: 'my-app',
  template: `
  <div class="nav">
    <input class="searchbox" type="text" name="search" placeholder="Dig in the Gear Box...">
    <a class="btn btn-primary" uiSref="Home" uiSrefActive="active">Home</a>
    <a uiSref="gears" uiSrefActive="active">Gears</a>
  </div>

  <ui-view></ui-view>
`})
export class App { }
