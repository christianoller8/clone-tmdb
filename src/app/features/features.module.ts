import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

import { MoviesComponent } from "./movies/movies.component";
import { HeaderComponent } from "./header/header.component";
import { Slider1Component } from "./slider1/slider1.component";

@NgModule({
  declarations: [MoviesComponent, HeaderComponent, Slider1Component],
  imports: [CommonModule, HttpClientModule],
  exports: [MoviesComponent, HeaderComponent, Slider1Component],
})
export class FeaturesModule {}
