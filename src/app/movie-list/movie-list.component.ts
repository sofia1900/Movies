import {Component, OnInit} from '@angular/core';
import {MovieService} from "../service/movie.service";
import {Movie} from "../Shared/Movie";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent implements OnInit{

  movies : Movie[] = [];
  movieSelect : Movie;
  constructor(private movieService : MovieService) {}

  ngOnInit(){
    this.movieService.getAllMovies()
      .subscribe( m =>
        this.movies = m
      )
  }

  select (movie : Movie) {
    this.movieSelect = movie
  }
}
