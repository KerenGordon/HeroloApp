import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as MoviesActions from './../state/actions/movies.action';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { IMovie } from '../model';


const API_KEY_OMDB = 'b9dcd357';
const API_KEY_TMDB = 'bda754b475257f4a407f3a491f7e46aa';

const tmdbUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY_TMDB}&language=en-US`;


@Injectable({
  providedIn: 'root'
})

export class HttpRequestsService {
  constructor(private http: HttpClient, private store: Store<AppState>) { }


  getMovies() {
    this.http.get(tmdbUrl).subscribe(list => {
      if (list) {
        list['results'].forEach(movie => {
          let omdbUrl = `http://www.omdbapi.com/?t=${movie.title}&apikey=${API_KEY_OMDB}&`;
          this.http.get(omdbUrl).subscribe((movie: IMovie) => {
            this.store.dispatch(new MoviesActions.AddMovie(movie));
          });
        });
      }
    });
  }
  getMovieDetails(movieTitle) {
    let omdbUrl = `http://www.omdbapi.com/?t=${movieTitle}&apikey=${API_KEY_OMDB}&`;

    return this.http.get(omdbUrl);
      // this.store.dispatch(new MoviesActions.AddMovie(movie));
    // });
  }

}
