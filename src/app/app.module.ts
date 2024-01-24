import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { HeaderComponent } from './header/header.component';
import { PosterComponent } from './poster/poster.component';
import { PlotComponent } from './plot/plot.component';
import {NgOptimizedImage} from "@angular/common";
import { DetailMovieComponent } from './detail-movie/detail-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    HeaderComponent,
    PosterComponent,
    PlotComponent,
    DetailMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
