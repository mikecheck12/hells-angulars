import "rxjs/add/operator/toPromise";
import { AuthHttp }      from "angular2-jwt";
import { Data, Rentals } from "../../data/dummydata";
import { Http }          from "@angular/http";
import { Injectable }    from "@angular/core";
import { UserData }      from "../../data/dummyusers";

@Injectable()
export class ProfileService {

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
        return response;
      })
      .catch(this.handleError);
  }

  public getUserProducts(): Promise<any> {
    return Promise.resolve(Data);
  }

  public getUserRentals(): Promise<any> {
    return Promise.resolve(Rentals);
  }

  public getUserRatingAsBuyer(): Promise<any> {

  }

  public getUserRatingAsSeller(): Promise<any> {

  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
};
