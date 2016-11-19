import { Component } from "@angular/core";

@Component({
  moduleId: module.id,
  selector: "google",
  templateUrl: "google.component.html",
  styleUrls: ["google.component.css"],
})

export class Google {
  title: string = 'My first angular2-google-maps project';
  lat: number = 51.678418;
  lng: number = 7.809007;
}