"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ng_bootstrap_1 = require('@ng-bootstrap/ng-bootstrap');
var ProductsComponent = (function () {
    function ProductsComponent(productsService, config) {
        this.productsService = productsService;
        this.config = config;
        config.max = 5;
        config.readonly = true;
    }
    ProductsComponent.prototype.getProducts = function () {
        var _this = this;
        this.productsService
            .getProducts()
            .then(function (products) {
            // Rearrange products to have 3 products in one row
            var productsWithRows = [];
            var row = [];
            for (var i = 0; i < products.length; i++) {
                if (i % 4 === 0 && row.length > 0) {
                    productsWithRows.push(row);
                    row = [];
                }
                row.push(products[i]);
                if (i === products.length - 1) {
                    productsWithRows.push(row);
                }
            }
            _this.products = productsWithRows;
        });
    };
    ProductsComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    ProductsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'products',
            templateUrl: 'products.component.html',
            styleUrls: ['products.component.css'],
            providers: [ng_bootstrap_1.NgbRatingConfig]
        })
    ], ProductsComponent);
    return ProductsComponent;
}());
exports.ProductsComponent = ProductsComponent;
