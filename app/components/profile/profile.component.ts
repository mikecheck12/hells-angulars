import { Component, OnInit } from "@angular/core";

import { ProfileService } from "./profile.service";

@Component({
  moduleId: module.id,
  selector: "profile",
  styleUrls: ["profile.component.css"],
  templateUrl: "profile.component.html",
})

export class ProfileComponent implements OnInit {
  public user: Array<any>;

  constructor(
    private profileService: ProfileService
  ) { }

  public getUserInfo() {
    this.profileService
      .getUserInfo()
      .then(info => {
        // do something with the info returned from request
        this.user = info;
        console.log(this.user);
      });
  }

  public ngOnInit(): void {
    this.getUserInfo();
  }
}
