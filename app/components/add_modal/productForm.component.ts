import { Component } from '@angular/core';

import { NewProduct } from './newProduct';

@Component({
  moduleId: module.id,
  selector: 'newprod-form',
  templateUrl: 'newProd-form.component.html'
})

export class NewProductForm {

  categories = ["Backpacking", "Bike", "Surf", "Snowboard", "Ski", "SUP", "Kayak"];

  onSubmit() {console.log('submitted')};
}
