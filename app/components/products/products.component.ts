import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  moduleId: module.id,
  selector: 'products',
  templateUrl: 'products.component.html',
  styleUrls: ['products.component.css'],
  providers: [NgbRatingConfig]
})

export class ProductsComponent implements OnInit {
  products: Array<any>;
  
  constructor(
    private productsService: ProductsService,
    private config: NgbRatingConfig
  ){
    config.max = 5;
    config.readonly = true;
  }
  
  getProducts() {
    this.productsService
        .getProducts()
        .then(products => {
          // Rearrange products to have 3 products in one row
          let productsWithRows: Array<any> = [];
          let row: Array<any> = [];
          for (let i = 0; i < products.length; i++) {
            if (i % 4 === 0 && row.length > 0) {
              productsWithRows.push(row);
              row = [];
            }
            row.push(products[i])
            if (i === products.length - 1) {
              productsWithRows.push(row);
            }
          }
          this.products = productsWithRows;
        })
  }

  ngOnInit(): void{
    this.getProducts();
  }
}