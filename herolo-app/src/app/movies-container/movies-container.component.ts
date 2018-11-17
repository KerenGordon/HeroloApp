import { Component, OnInit, Input } from '@angular/core';
import { CapitalizePipe } from './../pipes/capitalize.pipe';

@Component({
  selector: 'app-movies-container',
  templateUrl: './movies-container.component.html',
  styleUrls: ['./movies-container.component.scss'],
  providers: [CapitalizePipe]
})
export class MoviesContainerComponent implements OnInit {
  @Input() movies;
  constructor() { }

  ngOnInit() {
  }

}
