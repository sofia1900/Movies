import { Injectable } from '@angular/core';
import {MOVIES} from "../Shared/MockMovies";
import {Observable, of} from "rxjs";
import {Movie} from "../Shared/Movie";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movies = MOVIES;
  constructor() { }
  getAllMovies () : Observable<Movie[]>{
    return of(this.movies);
  }
}
