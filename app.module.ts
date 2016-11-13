
import { NgModule, Component }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { UIRouterModule } from 'ui-router-ng2';
import { HttpModule } from '@angular/http';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {App} from "./app/components/app.js";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";

import {Home} from "./app/components/home.js";
import {About} from "./app/components/about.js";
import {MyUIRouterConfig} from "./app/config/router.config.js";
import {homeState, aboutState} from "./states.js";

let INITIAL_STATES =  [ homeState, aboutState ];
let INITIAL_COMPONENTS =  [ App, Home, About ];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UIRouterModule.forRoot({
      states: INITIAL_STATES,
      useHash: true,
      configClass: MyUIRouterConfig
    })
  ],
  declarations: INITIAL_COMPONENTS,
  bootstrap: [ App ]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
