import "rxjs/add/operator/toPromise";
import { AuthHttp }      from "angular2-jwt";
import { Data, Rentals } from "../../data/dummydata";
import { Http }          from "@angular/http";
import { Injectable }    from "@angular/core";
import { UserData }      from "../../data/dummyusers";

@Injectable()
export class ProfileService {
  public userId: number;

  constructor(
    private http: Http,
    private authHttp: AuthHttp
  ) {}

  public getUserInfo(authId): Promise<any> {
    // dummy data version
    // return Promise.resolve(UserData);

    // live database version
    return this.authHttp.get(`/api/users/${authId}`)
      .toPromise()
      .then(response => {
        this.userId = JSON.parse(response._body).id;
        return JSON.parse(response._body);
      })
      .catch(this.handleError);
  }

  public getUserProducts(): Promise<any> {
    // dummy data version
    //return Promise.resolve(Data);

    // live database version
    return this.http.get(`/api/products/byuser/${this.userId}`)
      .toPromise()
      .then(response => {
        return JSON.parse(response._body);
      })
      .catch(this.handleError);
  }

  public getUserRentals(): Promise<any> {
    return Promise.resolve(Rentals);
  }

  public getUserRatingAsBuyer(): Promise<any> {

  }

  public getUserRatingAsSeller(): Promise<any> {

  }

  public getImages(productId): Promise<any> {
    return this.http.get(`/api/products/images/${productId}`)
    .toPromise()
    .then(response => {
      return JSON.parse(response._body);
    })
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
};
