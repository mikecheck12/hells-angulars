import {Home} from "./components/home/home";
import { ProductsComponent } from "./components/products/products.component";
import {Transition} from "ui-router-ng2";

/** States */
export const homeState = { name: 'home', url: '/home',  component: Home };

export const aboutState = { name: 'gears', url: '/gears',  component: ProductsComponent };