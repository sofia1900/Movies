import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MovieListComponent} from "./movie-list/movie-list.component";
import {DetailMovieComponent} from "./detail-movie/detail-movie.component";

const routes: Routes = [
  {path : '', component : MovieListComponent},
  {path : 'detail/:title', component : DetailMovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
