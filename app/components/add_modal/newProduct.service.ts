import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";

@Injectable()

export class NewProductService {

  public headers: Headers = new Headers({
  "Content-Type": "application/json",
  Accept: "application/json",
  });

  constructor(private http: Http) {

  }

  public postProduct(newProduct) {
    return this.http.post("api/products", newProduct, { headers: this.headers })
    .map(res => res)
    .subscribe(data => data);
  }
}

// public findOrCreateUser(profile) {
//   return this.http.post('api/users', profile, {headers:this.headers})
//   .map(res => res)
//   .subscribe(
//   data => data
//   )
//   }
