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
  public products: Array<any>;
  public rentals: Array<any>;

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
      .catch(err => console.log(err));
  }

  getUserProducts() {
    this.profileService
      .getUserProducts()
      .then(products => {
        this.products = products;
        console.log("products", products)
      })
      .catch(err => console.log(err));
  }

  getUserRentals() {
    this.profileService
      .getUserRentals()
      .then(rentals => {
        this.rentals = rentals;
        console.log("rentals", rentals)
      })
      .catch(err => console.log(err));
  }

  ngOnInit(): void {
    this.getUserInfo();
    this.getUserProducts();
    this.getUserRentals();
  }
}
