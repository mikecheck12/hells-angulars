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

    let url = "/api/products/" + id;
    return this.http.get(url)
        .toPromise()
        .then(response => response.json())
        .catch(this.handleError);
  }

  public charge(token, amount) {
    let requestBody = {token: token, amount: amount};
    return this.http.post("api/charge", requestBody, {headers: this.headers})
      .map(res => res)
      .subscribe(data => data);
  }

  public getImages(productId): Promise<any> {
    return this.http.get(`/api/products/images/${productId}`)
    .toPromise()
    .then(response => {
      return response;
    })
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
