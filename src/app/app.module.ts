import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule, JsonpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {BannerHeadComponent} from "./banner-head/banner-head.component";
import {AppRouteModule} from "./app-routing.module";
import {ProjectItemComponent} from "./project-item/project-item.component";

@NgModule({
  declarations: [
    AppComponent,
    BannerHeadComponent,
    ProjectItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AppRouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
