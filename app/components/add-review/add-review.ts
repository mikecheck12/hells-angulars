import { Component, Input, Output, EventEmitter }         from "@angular/core";
import { NewReview }        from "./newReview";
import { AddReviewService } from "./add-review.service";

import { NgbRatingConfig } from "@ng-bootstrap/ng-bootstrap";

@Component({
  moduleId: module.id,
  selector: "addreview-form",
  templateUrl: "add-review.html",
  styleUrls: [ "add-review.css" ],
  providers: [ NgbRatingConfig ],
})

export class AddReviewForm {
  @Input() transaction;
  @Output()
  close: EventEmitter<any> = new EventEmitter();

  public selected = 0;
  public hovered = 0;
  public readonly = false;

  public model = new NewReview();

  constructor(
    private addReivewService: AddReviewService,
    private config: NgbRatingConfig,
  ) {
    config.max = 5;
  }

  public onSubmit(model: NewReview) {

    model.authorId = JSON.parse(localStorage.getItem("profile")).user_id;
    model.transactionId = this.transaction.id;
    model.productId = this.transaction.product_id;
    model.buyerId = this.transaction.buyer_id;
    model.sellerId = this.transaction.seller_id;
    model.rating = this.selected;
    console.log(this.model);
    // this.addReivewService.addReivew(model)
    //     .then(result => {
    //       this.close.emit();
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     });
  };

}
