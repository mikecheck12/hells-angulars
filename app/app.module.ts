
import { NgModule, Component }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { UIRouterModule } from 'ui-router-ng2';
import { HttpModule, JsonpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {App} from "./components/app/app.js";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";

import {Home} from "./components/home/home.js";
import {About} from "./components/about.js";
import { Products } from './components/products/products'
import {MyUIRouterConfig} from "./config/router.config.js";
import {homeState, productsState} from "./states.js";

import { ProductsService } from "./components/products/products.service";
import { ProductDetailsService } from "./components/product-details/product-details.service";

import { AUTH_PROVIDERS }      from 'angular2-jwt';

let INITIAL_STATES =  [ homeState, productsState ];
let INITIAL_COMPONENTS =  [ App, Home, Products ];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    NgbModule.forRoot(),
    UIRouterModule.forRoot({
      states: INITIAL_STATES,
      useHash: true,
      configClass: MyUIRouterConfig
    })
  ],
  declarations: INITIAL_COMPONENTS,
  providers: [ProductsService, ProductDetailsService, AUTH_PROVIDERS],
  bootstrap: [ App ]
})
export class AppModule { }


