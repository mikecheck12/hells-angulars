import {Home} from "./components/home/home";
import { ProductsComponent } from "./components/products/products.component";
import {Transition} from "ui-router-ng2";

/** States */
export const homeState = { name: 'home', url: '/',  component: Home };

export const gearState = { name: 'gear', url: '/gear',  component: ProductsComponent };