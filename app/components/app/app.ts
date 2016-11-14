import {Component} from "@angular/core";
import {UIROUTER_DIRECTIVES} from "ui-router-ng2";

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
  <div class="nav">
    Gear Box
    <input class="searchbox" type="text" name="search" placeholder="Dig in the Gear Box...">
    <button class="btn btn-primary" type="button">Dig In!</button>

    <a class="btn btn-primary" uiSref="Home" uiSrefActive="active">Home</a>
    <a uiSref="gears" uiSrefActive="active">Gears</a>
    <a class="btn btn-secondary" uiSref="Login" uiSrefActive="active">Login</a>
  </div>

  <ui-view></ui-view>

  <div>Footer</div>
  `,
  styleUrls: [ 'app.css' ]
})

export class App {
  title: "Gear Box"
}
