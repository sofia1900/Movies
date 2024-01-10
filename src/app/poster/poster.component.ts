import {Component, Input} from '@angular/core';
import {Movie} from "../Shared/Movie";

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrl: './poster.component.css'
})
export class PosterComponent {
  @Input() img : Movie;
}
