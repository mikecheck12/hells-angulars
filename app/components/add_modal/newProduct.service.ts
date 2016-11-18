import { Headers, Http } from "@angular/http";
import { Injectable }    from "@angular/core";
import { NewProduct }    from "./newProduct";

@Injectable()
export class NewProductService {

  public headers: Headers = new Headers({
  "Content-Type": "application/json",
  Accept: "application/json",
  });

  constructor(private http: Http) { }

  // adds a product to the database
  public postProduct(newProduct: NewProduct) {
    return this.http.post("api/products", newProduct, { headers: this.headers })
    .map(res => res)
    .subscribe(data => data);
  }

  public postImage(){

  }
}
