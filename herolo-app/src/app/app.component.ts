import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { HttpRequestsService } from './services/http-requests.service';
import { AppState } from './state/app.state';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  movies;

  constructor(private httpService: HttpRequestsService, private store: Store<AppState>) { }
  
  
  ngOnInit() {
    this.httpService.getMovies();
    this.store.subscribe(state => {
      this.movies = state.movies
    })
  }

}