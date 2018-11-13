import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

const API_KEY = 'b9dcd357';
// http://img.omdbapi.com/?apikey=[yourkey]&


export interface IMovie {
  id: string,
  Title: string,
  year: string,
  runtime: string,
  genre: string,
  director: string
}

@Injectable({
  providedIn: 'root'
})

export class HttpRequestsService {
  constructor(private http: HttpClient) { }
  currentListSub$ = new BehaviorSubject(null);
  getMovieList() {
    // check 'promise all' 
    let list: IMovie[] = [];

    this.generateRandomIds(10).forEach(movieId => {
      const url = `http://www.omdbapi.com/?i=tt${movieId}&apikey=${API_KEY}&`;
      this.http.get(url).subscribe((movie: IMovie) => {
        list.push(movie);
        this.currentListSub$.next(list);
      });
    });
  }
  generateRandomIds(n: number): number[] {
    let ids = [];
    let pad = (number, length) => {
      var str = '' + number;
      while(str.length < length) {
        str = '0' + str;
      }
      return str;
    }
		for (let index = 0; index < n; index++) {
			let movie = pad(Math.floor((Math.random() * 2155529) + 1), 7);
			ids.push(movie);
		}
    return ids;

  }
}
