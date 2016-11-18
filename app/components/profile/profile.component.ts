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
    this.userId = JSON.parse(localStorage.getItem("profile")).user_id;
  }

  getUserInfo() {
    this.profileService
      .getUserInfo(this.userId)
      .then(user => {
        this.user = user;
        this.getUserProducts();
        this.getUserRentals();
      })
      .catch(this.handleError);
  }

  getUserProducts() {
    this.profileService
      .getUserProducts()
      .then(products => {
        products.forEach(element => {
          element.primaryImage = this.getPrimaryImage(element.id);
        })
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

  getPrimaryImage(productId) {
    console.log("getImages: ", productId);
    this.profileService
      .getImages(productId)
      .then(picUrls => {
        console.log(picUrls)
        return picUrls[0].url;
      })
      .catch(err => console.log(err));
  }

  ngOnInit(): void {
    this.getUserIdFromProfile();
    this.getUserInfo();
  }
}
