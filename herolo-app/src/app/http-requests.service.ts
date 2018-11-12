import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_KEY = 'b9dcd357';
const url = `http://www.omdbapi.com/?t=y&apikey=${API_KEY}&`;
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

  getMovieList() {
    return this.http.get(url);
  }
}
