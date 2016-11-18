import { Component, OnInit } from "@angular/core";
import { ProfileService }    from "./profile.service";

@Component({
  moduleId: module.id,
  selector: "profile",
  styleUrls: ["profile.component.css"],
  templateUrl: "profile.component.html",
})

export class ProfileComponent implements OnInit {
  public user: any;
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
      .then(response => {
        const user = JSON.parse(response._body);
        this.user = user;
        this.getUserProducts();
        this.getUserRentals();
      })
      .catch(err => console.log(err));
  }

  getUserProducts() {
    this.profileService
      .getUserProducts()
      .then(response => {
        const products = JSON.parse(response._body);
        products.forEach(element => {
          this.profileService
            .getImages(element.id)
            .then(response2 => {
              const imageUrls = JSON.parse(response2._body);
              element.primaryImage = imageUrls[0].url;
            });
        });
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
  }
}
