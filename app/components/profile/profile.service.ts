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

  // need to write this for when the DB is populated
  public getUserInfo(): Promise<any> {
    // dummy data version
    return Promise.resolve(UserData);

    // live database version
    // return this.authHttp.get(`/api/users`)
    //   .toPromise()
    //   .then(response => console.log(response))
    //   .catch(this.handleError);
  }

  public getUserProducts(): Promise<any> {
    return Promise.resolve(Data);
  }

  public getUserRentals(): Promise<any> {
    console.log("getting rentals");
    return Promise.resolve(Rentals);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
