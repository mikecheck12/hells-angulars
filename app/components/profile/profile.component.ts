import { Component, OnInit } from "@angular/core";

import { ProfileService } from "./profile.service";

@Component({
  moduleId: module.id,
  selector: "profile",
  styleUrls: ["profile.component.css"],
  templateUrl: "profile.component.html",
})

export class ProfileComponent implements OnInit {
  public users: Array<any>;

  constructor(
    private profileService: ProfileService
  ) { }

  getUserInfo() {
    this.profileService
      .getUserInfo()
      .then(users => {
        // do something with the info returned from request
        this.users = users;
        console.log(this.users);
      })
      .catch(err => {
        console.log(err);
      });
  }

  ngOnInit(): void {
    this.getUserInfo();
  }
}
