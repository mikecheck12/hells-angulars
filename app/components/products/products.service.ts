import { Injectable } from '@angular/core';
import { Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Data } from '../../data/dummydata';

@Injectable()

export class ProductsService {
  keyword: string;

  constructor(
    private http: Http
  ){}

  public getProducts(): Promise<any>{
    return Promise.resolve(Data)
    // return this.http.get('/api/products')
    //               .toPromise()
    //               .then(response => response.json())
    //               .catch(this.handleError);
  }

  public getProductsByQuery(): Promise<any> {
    let url = '/api/products?productname=' + this.keyword;
    console.log(url);
    return this.http.get(url)
                    .toPromise()
                    .then(response => response.json())
                    .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}

