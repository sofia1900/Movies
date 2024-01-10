import {Component, Input} from '@angular/core';
import {Movie} from "../Shared/Movie";

@Component({
  selector: 'app-plot',
  templateUrl: './plot.component.html',
  styleUrl: './plot.component.css'
})
export class PlotComponent {
  @Input() movie : Movie;
}
