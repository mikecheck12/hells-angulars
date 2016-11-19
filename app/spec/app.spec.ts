import { TestBed, async } from "@angular/core/testing";
import { App }            from "../components/app/app";
import {  }               from "jasmine";

describe("Gear Box Application", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        App,
      ],
    });
  });

  it("should create the app", async(() => {
    let fixture = TestBed.createComponent(App);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
