
import { NgModule, Component }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { UIRouterModule } from 'ui-router-ng2';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {App} from "./components/app.js";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";

import {Home} from "./components/home.js";
import {About} from "./components/about.js";
import { ProductsComponent } from './components/products/products.component'
import {MyUIRouterConfig} from "./config/router.config.js";
import {homeState, aboutState} from "./states.js";

import { ProductsService } from "./components/products/products.service";

let INITIAL_STATES =  [ homeState, aboutState ];
let INITIAL_COMPONENTS =  [ App, Home, ProductsComponent ];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    UIRouterModule.forRoot({
      states: INITIAL_STATES,
      useHash: true,
      configClass: MyUIRouterConfig
    })
  ],
  declarations: INITIAL_COMPONENTS,
  providers: [ProductsService],
  bootstrap: [ App ]
})
export class AppModule { }


