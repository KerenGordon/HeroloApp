import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MoviesContainerComponent } from './movies-container/movies-container.component';
import { ActionModalComponent } from './action-modal/action-modal.component';
import { MovieComponent } from './movie/movie.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EditComponent } from './movie/edit/edit.component';
import { AddNewComponent } from './movie/add-new/add-new.component';
import { reducer } from './state/reducers/movies.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule, MatIconModule, MatDialogModule, MatButtonModule, MatInputModule, MatFormFieldModule} from '@angular/material';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    MoviesContainerComponent,
    ActionModalComponent,
    MovieComponent,
    EditComponent,
    AddNewComponent,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({
      movies: reducer
    }),
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [ActionModalComponent, EditComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
