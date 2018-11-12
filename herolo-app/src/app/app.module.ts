import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MoviesContainerComponent } from './movies-container/movies-container.component';
import { ActionModalComponent } from './action-modal/action-modal.component';
import { MovieComponent } from './movie/movie.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MoviesContainerComponent,
    ActionModalComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
