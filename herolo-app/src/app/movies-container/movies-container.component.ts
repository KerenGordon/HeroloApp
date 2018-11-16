import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movies-container',
  templateUrl: './movies-container.component.html',
  styleUrls: ['./movies-container.component.scss']
})
export class MoviesContainerComponent implements OnInit {
  @Input() movies;
  constructor() { }

  ngOnInit() {
  }

}
