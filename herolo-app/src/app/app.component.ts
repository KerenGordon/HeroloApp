import { Component, OnInit } from '@angular/core';
import { HttpRequestsService, IMovie } from './http-requests.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private httpService: HttpRequestsService) { }
  movies: IMovie[];
  ngOnInit() {
    this.httpService.getMovieList();
    this.httpService.currentListSub$.subscribe(movies => {
      this.movies = movies
      console.log(this.movies)
    })
  }

}