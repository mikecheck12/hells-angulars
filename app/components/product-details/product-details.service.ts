import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";

import "rxjs/add/operator/toPromise";

import { Data } from "../../data/dummydata";

@Injectable()

export class ProductDetailsService {
  public headers: Headers = new Headers({
  "Content-Type": "application/json",
  Accept: "application/json",
  });

  constructor(
    private http: Http
  ) {}

  public getProductDetails(id: any) {
    console.log(id);
    let productDetail = Data.filter(product => product.id === id);
    return productDetail[0];

    // let url = "/api/products/" + id;
    // return this.http.get(url)
    //     .toPromise()
    //     .then(response => response.json())
    //     .catch(this.handleError);
  }
  public charge(token) {
    return this.http.post('api/charge', token, {headers: this.headers})
      .map(res => res)
      .subscribe(data => data);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}


