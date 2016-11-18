import { ActivatedRoute }           from "@angular/router";
import { Component, Input, OnInit } from "@angular/core";
import { NgbRatingConfig }          from "@ng-bootstrap/ng-bootstrap";
import { stripeConfig }        from "../../stripe/stripe.config";
import { ProductDetailsService }    from "./product-details.service";
import { UIROUTER_DIRECTIVES }      from "ui-router-ng2";


@Component({
  moduleId: module.id,
  providers: [ NgbRatingConfig ],
  selector: "products",
  styleUrls: [ "product-details.css" ],
  templateUrl: "product-details.html",
})

export class ProductDetails implements OnInit {

  @Input() public product: any;

  @Input() public selectedPic: String;

  @Input() fromDate: Date;
  @Input() toDate: Date;

  public totalAmount: Number = 10;

  public userId = JSON.parse(localStorage.getItem("profile")).user_id;

  public amount = 2000;

  constructor(
    private config: NgbRatingConfig,
    private productDetailsService: ProductDetailsService
  ) {
    config.max = 5;
    config.readonly = true;
  }

  public ngOnInit() {
    this.selectedPic = this.product.pic[0];
    console.log(this.selectedPic);
  }

  public onSelect(n: number) {
    this.selectedPic = this.product.pic[n];
  }

  public openCheckOut() {

    let handler = (<any> window).StripeCheckout.configure({
      key: stripeConfig.apiKey,
      locale: "auto",
      token: (token: any) => {
        this.productDetailsService.charge(token);
      },
    });

    handler.open({
      name: "Hell\"s Angulars",
      amount: 2000,
    });

  }

}
