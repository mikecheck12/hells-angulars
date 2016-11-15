"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
require('rxjs/add/operator/toPromise');
var dummydata_1 = require('../../data/dummydata');
var ProductsService = (function () {
    function ProductsService(http) {
        this.http = http;
    }
    ProductsService.prototype.getProducts = function () {
        return Promise.resolve(dummydata_1.Data);
        // TBD, UNCOMMENT FOLLING LINES AFTER BACKEND ROUTE SETUP
        // return this.http.get('/api/products')
        //               .toPromise()
        //               .then(response => response.json())
        //               .catch(this.handleError);
    };
    ProductsService.prototype.handleError = function (error) {
        return Promise.reject(error.message || error);
    };
    ProductsService = __decorate([
        core_1.Injectable()
    ], ProductsService);
    return ProductsService;
}());
exports.ProductsService = ProductsService;
