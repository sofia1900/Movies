import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Movie} from "../Shared/Movie";
import {MovieService} from "../service/movie.service";

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrl: './detail-movie.component.css'
})
export class DetailMovieComponent implements OnInit{

  titleSelect : string = "";
  movie : Movie;
  constructor(private route : ActivatedRoute,private service : MovieService) {}

  ngOnInit () {
    this.titleSelect = this.route.snapshot.params['title'];
    if (this.titleSelect != ""){
      this.movie = this.service.getMovieByTitle(this.titleSelect)
    }
  }
}
