import {UIRouter} from "ui-router-ng2";
import {helloState, aboutState, peopleState, personState} from "../../states";
import {Inject, Injectable} from "@angular/core";
import {PeopleService} from "../services/people.js";

/** UIRouter Config  */
@Injectable()
export class MyUIRouterConfig {
  constructor(@Inject(UIRouter) router: UIRouter) {
    
    // If no URL matches, go to the `hello` state by default
    router.urlRouterProvider.otherwise('hello');
  }
}