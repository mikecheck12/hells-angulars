import {Home} from "./components/home/home";

import { Products } from "./components/products/products";
import { ProductDetails } from "./components/product-details/product-details";

import { ProductDetailsService } from "./components/product-details/product-details.service";
import { ProfileComponent } from "./components/profile/profile.component";

import {Transition} from "ui-router-ng2";
import { NgbdModalBasic } from "./components/add_modal/addModal";

/** States */
export const homeState = { name: "home", url: "/",  component: Home };

export const productsState = {
  name: "products",
  url: "/products",
  component: Products,

};

export const productDetailsState = {
  name: "productDetails",
  url: "/product/:productId",
  component: ProductDetails,
  resolve: [
    {
      token: "product",
      deps: [Transition, ProductDetailsService],
      resolveFn: (trans, productDetailsSvc) => productDetailsSvc.getProductDetails(trans.params().productId),
    },
  ],
};

export const addProductState = { name: "addModal", url: "/addModal", component: NgbdModalBasic };

export const profileState = {
  name: "profile",
  url: "/profile",
  component: ProfileComponent,
};
