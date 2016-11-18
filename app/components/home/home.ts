import { Auth }      from "../../auth/auth.service";
import { Component } from "@angular/core";

@Component({
  moduleId: module.id,
  styleUrls: [ "home.css" ],
  templateUrl: "home.html",
})

export class Home {
  // Injects Auth service to be used in template
  constructor(private auth: Auth) { }

}
