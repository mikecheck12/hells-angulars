import { ActivatedRoute }           from "@angular/router";
import { Component, Input, OnInit, DoCheck } from "@angular/core";
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

export class ProductDetails implements OnInit, DoCheck {

  @Input() public product: any;

  @Input() public selectedPic: String;

  @Input() fromDate: any;
  @Input() toDate: any;

  private oldFromDate: any = undefined;
  private oldToDate: any = undefined;
  private totalAmount: Number;

  private userId = JSON.parse(localStorage.getItem("profile")).user_id;

  constructor(
    private config: NgbRatingConfig,
    private productDetailsService: ProductDetailsService
  ) {
    config.max = 5;
    config.readonly = true;
  }

  public ngOnInit() {
    console.log(this.product);
    this.selectedPic = this.product.pic;
    console.log(this.selectedPic);
  }

  public onSelect(n: number) {
    this.selectedPic = this.product.pic;
  }

  public openCheckOut() {

    let handler = (<any> window).StripeCheckout.configure({
      key: stripeConfig.apiKey,
      locale: "auto",
      token: (token: any) => {
        this.productDetailsService.charge(token, this.totalAmount);
      },
    });

    handler.open({
      name: "Gear Box",
      amount: +this.totalAmount * 100,
    });

  }

  public ngDoCheck() {
    if (this.oldFromDate !== this.fromDate && this.oldToDate !== this.toDate) {
      // this.convert date objects to date fromat
      let fromDate = this.convertObjToDate(this.fromDate);
      let toDate = this.convertObjToDate(this.toDate);
      // Calculate days between
      let daysBetween = this.getDaysBetween(fromDate, toDate);
      // if days between is more than 1
      if (daysBetween > 0) {
        this.totalAmount = this.product.priceperday * daysBetween;
        console.log(this.totalAmount);
      }
    }
  }

  public convertObjToDate(obj: any) {
    let date = obj.year + "-" + obj.month + "-" + obj.day;
    return new Date(date);
  }

  public getDaysBetween(date1: Date, date2: Date) {
    let oneDay = 1000 * 60 * 60 * 24;

    // this.Convert both dates to milliseconds
    let date1Ms = date1.getTime();
    let date2Ms = date2.getTime();

    // Calculate the difference in milliseconds
    let differenceMs = date2Ms - date1Ms;

    // this.Convert back to days and return
    return Math.round(differenceMs / oneDay);
  }
}
