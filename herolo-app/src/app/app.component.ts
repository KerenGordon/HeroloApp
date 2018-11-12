import { Component, OnInit } from '@angular/core';
import { HttpRequestsService } from './http-requests.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private httpService: HttpRequestsService) { }

  ngOnInit() {
    this.httpService.getMovieList().subscribe( movies => console.log(movies));
  }

}