import { Component } from '@angular/core';

import { NewProduct } from './newProduct';

import { NewProductService } from './newProduct.service'

@Component({
  moduleId: module.id,
  selector: 'newprod-form',
  templateUrl: 'newProd-form.component.html'
})

export class NewProductForm {

  categories = ["Backpacking", "Bike", "Surf", "Snowboard", "Ski", "SUP", "Kayak"];

  model = new NewProduct();

  onSubmit(model) {console.log(model)};
}
