import { TestBed, async } from "@angular/core/testing";
import { ProductDetails } from "./app/product-details/product-details";

describe("Gear Box Application", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        App,
        ProductDetails,
      ],
    });
  });

  it("should create the app", async(() => {
    let fixture = TestBed.createComponent(App);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
