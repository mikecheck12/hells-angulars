import { Injectable } from "@angular/core";
// import { Headers, Http } from "@angular/http";
import { Http } from "@angular/http";
import { AuthHttp } from "angular2-jwt";

import "rxjs/add/operator/toPromise";


import { UserData } from "../../data/dummyusers";

@Injectable()

export class ProfileService {

  constructor(
    private http: Http,
    private authHttp: AuthHttp
  ) {}

  // need to write this for when the DB is populated
  public getUserInfo(): Promise<any> {
    // dummy data version
    // return Promise.resolve(UserData);

    // live database version
    return this.authHttp.get(`/api/users/`)
      .toPromise()
      .then(response => console.log(response))
      .catch(this.handleError);

  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
