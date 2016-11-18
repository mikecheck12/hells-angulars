import { Component, OnInit } from "@angular/core";
import { ProfileService }    from "./profile.service";

@Component({
  moduleId: module.id,
  selector: "profile",
  styleUrls: ["profile.component.css"],
  templateUrl: "profile.component.html",
})

export class ProfileComponent implements OnInit {
  public user: Object<any>;
  public products: Array<any>;
  public rentals: Array<any>;
  public userId: string;

  constructor(
    private profileService: ProfileService
  ) { }

  getUserIdFromProfile() {
    this.userId = JSON.parse(localStorage.getItem('profile')).user_id;
  }

  getUserInfo() {
    this.profileService
      .getUserInfo(this.userId)
      .then(response => {
        this.user = JSON.parse(response._body);
      })
      .catch(this.handleError);
  }

  getUserProducts() {
    this.profileService
      .getUserProducts()
      .then(products => {
        this.products = products;
      })
      .catch(err => console.log(err));
  }

  getUserRentals() {
    this.profileService
      .getUserRentals()
      .then(rentals => {
        this.rentals = rentals;
      })
      .catch(err => console.log(err));
  }

  ngOnInit(): void {
    this.getUserIdFromProfile();
    this.getUserInfo();
    this.getUserProducts();
    this.getUserRentals();
  }
}
