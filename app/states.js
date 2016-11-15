"use strict";
var home_1 = require("./components/home/home");
var products_component_1 = require("./components/products/products.component");
/** States */
exports.homeState = { name: 'home', url: '/', component: home_1.Home };
exports.gearState = { name: 'gear', url: '/gear', component: products_component_1.ProductsComponent };
