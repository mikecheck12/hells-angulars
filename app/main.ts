import { AppModule } from "./app.module.js";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

const platform = platformBrowserDynamic();

platform.bootstrapModule(AppModule);
