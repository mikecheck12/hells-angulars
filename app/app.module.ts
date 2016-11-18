import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";

import { AUTH_PROVIDERS }          from "angular2-jwt";
import { BrowserModule }           from "@angular/platform-browser";
import { FormsModule }             from "@angular/forms";
import { HttpModule, JsonpModule } from "@angular/http";
import { NgbModule }               from "@ng-bootstrap/ng-bootstrap";
import { NgModule }                from "@angular/core";
import { UIRouterModule }          from "ui-router-ng2";

import { App }                     from "./components/app/app.js";
import { Home }                    from "./components/home/home.js";
import { NewProductForm }          from "./components/add_modal/productForm.component";
import { NgbdModalBasic }          from "./components/add_modal/addModal";
import { Products }                from "./components/products/products";
import { ProductDetails }          from "./components/product-details/product-details";
import { ProfileComponent }        from "./components/profile/profile.component";

import { NewProductService }       from "./components/add_modal/newProduct.service";
import { ProductsService }         from "./components/products/products.service";
import { ProductDetailsService }   from "./components/product-details/product-details.service";
import { ProfileService }          from "./components/profile/profile.service";

import { MyUIRouterConfig }        from "./config/router.config.js";
import { homeState, productsState, productDetailsState, addProductState, profileState } from "./states.js";

let INITIAL_COMPONENTS =  [ App, Home, Products, ProductDetails, ProfileComponent, NgbdModalBasic, NewProductForm ];
let INITIAL_PROVIDERS  =  [ ProductsService, ProfileService, ProductDetailsService, AUTH_PROVIDERS, NewProductService ];
let INITIAL_STATES     =  [ addProductState, homeState, productsState, productDetailsState, profileState ];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    NgbModule.forRoot(),
    UIRouterModule.forRoot({
      configClass: MyUIRouterConfig,
      states: INITIAL_STATES,
      useHash: true,
    }),
  ],
  declarations: INITIAL_COMPONENTS,

  providers: INITIAL_PROVIDERS,

  bootstrap: [ App ],
})
export class AppModule { }
