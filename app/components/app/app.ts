import { Auth }                from "../../auth/auth.service";
import { Component, OnInit }   from "@angular/core";
import { ProductsService }     from "../products/products.service";
import { UIROUTER_DIRECTIVES } from "ui-router-ng2";

@Component({
  moduleId: module.id,
  providers: [ Auth ],
  selector: "my-app",
  styleUrls: [ "app.css" ],
  templateUrl: "app.html",
})

export class App {

  title: "Gear Box";

  constructor(
    private auth: Auth,
    private productsService: ProductsService
   ) { }

  public onSearch(form: any) {
    this.productsService.keyword = form.value.keyword;
  };

  ngOnInit(): void {
    // checks for user based on profile from Auth0 in localstorage
    this.auth.findOrCreateUser(localStorage.getItem("profile"));
  }

}
