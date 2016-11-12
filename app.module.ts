
import { NgModule, Component }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { UIRouterModule } from 'ui-router-ng2';
import { HttpModule } from '@angular/http';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {App} from "./app/components/app.js";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";

import {Hello} from "./app/components/hello.js";
import {About} from "./app/components/about.js";
import {People} from "./app/components/people.js";
import {Person} from "./app/components/person.js";
import {MyUIRouterConfig} from "./app/config/router.config.js";
import {helloState, aboutState, peopleState, personState} from "./states.js";

let INITIAL_STATES =  [ helloState, aboutState, peopleState, personState ];
let INITIAL_COMPONENTS =  [ App, Hello, About, People, Person ];

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
