import { Injectable } from "@angular/core";
// import { Headers, Http } from "@angular/http";
import { Http } from "@angular/http";

import "rxjs/add/operator/toPromise";

import { UserData } from "../../data/dummyusers";

@Injectable()

export class ProfileService {
  username: string;

  constructor(
    private http: Http
  ) {}

  // need to write this for when the DB is populated
  public getUserInfo(): Promise<any> {
    // dummy data version
    return Promise.resolve(UserData);

    // live database version
    // console.log("YO", JSON.parse(localStorage.getItem("profile"));)
    // return this.http.get(`/api/profile/`)
    //   .toPromise()
    //   .then(response => console.log(response))
    //   .catch(this.handleError);

  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
