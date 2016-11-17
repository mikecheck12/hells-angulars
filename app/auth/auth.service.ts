import { Injectable }      from "@angular/core";
import { tokenNotExpired } from "angular2-jwt";
import { myConfig }        from "./auth.config";
import { Http, Headers } from "@angular/http";
import { AuthHttp } from "angular2-jwt";

// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class Auth {
  headers: Headers = new Headers({
    "Content-Type": "application/json",
    Accept: "application/json"
  });
  // Configure Auth0
  lock = new Auth0Lock(myConfig.clientID, myConfig.domain, {
    additionalSignUpFields: [{
      name: "firstname",                              // required
      placeholder: "enter your first name"
    },
    {
      name: "lastname",                              // required
      placeholder: "enter your last name"
    }]
  });

  userProfile: Object;
  getData: string;

  constructor(private authHttp: AuthHttp, private http: Http) {
    // Set userProfile attribute of already saved profile
    var context = this;
    this.userProfile = JSON.parse(localStorage.getItem("profile"));
    // Add callback for lock `authenticated` event
    this.lock.on("authenticated", (authResult: any) => {
      localStorage.setItem("id_token", authResult.idToken);
      // Fetch profile information
      this.lock.getProfile(authResult.idToken, (error: any, profile: any) => {
        if (error) {
          // Handle error
          alert(error);
          return;
        }
        localStorage.setItem("profile", profile);
        context.userProfile = profile;
        this.findOrCreateUser(profile)
      });
    });

  }

  public login() {
    // Call the show method to display the widget.
    this.lock.show();
  };

  public authenticated() {
    // Check if there"s an unexpired JWT
    // This searches for an item in localStorage with key == "id_token"
    return tokenNotExpired();
  };

  public logout() {
    // Remove token from localStorage
    localStorage.removeItem("id_token");
    localStorage.removeItem("profile");
    this.userProfile = undefined;
  };

  public findOrCreateUser(profile) {
   return this.http.post("api/users", profile, {headers:this.headers})
    .map(res => res)
    .subscribe(
      data => data
    )
  }
}




