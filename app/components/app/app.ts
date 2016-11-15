import {Component} from "@angular/core";
import {UIROUTER_DIRECTIVES} from "ui-router-ng2";
import {Auth} from "../../auth/auth.service";
@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
  <div class="nav">
    Gear Box
    <input class="searchbox" type="text" name="search" placeholder="Dig in the Gear Box...">
    <button class="btn btn-primary" type="button">Dig In!</button>

    <a class="btn btn-primary" uiSref="home" uiSrefActive="active">Home</a>
    <a uiSref="gear" uiSrefActive="active">Gear</a>
    <button class="btn btn-primary btn-margin" (click)="auth.login()" *ngIf="!auth.authenticated()">Log In</button>
    <button class="btn btn-primary btn-margin" (click)="auth.logout()" *ngIf="auth.authenticated()">Log Out</button>
  </div>

  <ui-view></ui-view>

  <div>Footer</div>
  `,
  styleUrls: [ 'app.css' ],
  providers: [ Auth ]
})

export class App {
  title: "Gear Box";

  constructor(private auth: Auth) {}
}
