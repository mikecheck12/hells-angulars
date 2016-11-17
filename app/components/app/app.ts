import {Component, OnInit} from "@angular/core";
import {UIROUTER_DIRECTIVES} from "ui-router-ng2";
import {Auth} from "../../auth/auth.service";

import { ProductsService } from '../products/products.service';


@Component({
  moduleId: module.id,
  selector: 'my-app',
  providers: [Auth],
  templateUrl: 'app.html',
  styleUrls: [ 'app.css' ]
})

export class App {

  title: "Gear Box";


  constructor(
    private auth: Auth,
    private productsService: ProductsService
   ) {}

  public onSearch(form:any) {
    console.log(form.value.keyword);
    this.productsService.keyword = form.value.keyword;

  };

  ngOnInit(): void {
    this.auth.findOrCreateUser(localStorage.getItem('profile'));
  }


}
