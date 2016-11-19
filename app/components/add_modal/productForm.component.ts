import { Component }         from "@angular/core";
import { NewProduct }        from "./newProduct";
import { NewProductService } from "./newProduct.service";

@Component({
  moduleId: module.id,
  selector: "newprod-form",
  templateUrl: "newProd-form.component.html",
})

export class NewProductForm {

  public categories = [ "Backpacking", "Bike", "Surf", "Snowboard", "Ski", "SUP", "Kayak" ];

  public model = new NewProduct();

  constructor(private newProductService: NewProductService) { }

  public onSubmit(model: NewProduct) {
    // console.log(model);
    // console.log(this);
    model.userId = JSON.parse(localStorage.getItem("profile")).user_id;
    this.newProductService.postProduct(model);
  };
}
