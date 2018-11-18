import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MoviesContainerComponent } from './movies-container/movies-container.component';
import { MovieComponent } from './movie/movie.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/reducers/movies.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule, MatIconModule, MatDialogModule, MatButtonModule,
        MatInputModule, MatFormFieldModule, MatSnackBarModule} from '@angular/material';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ActionModalComponent } from './user-actions/action-modal/action-modal.component';
import { VerifyModalComponent } from './user-actions/verify-modal/verify-modal.component';
import { OnlyNumberDirective } from './directives/only-number.directive';




@NgModule({
  declarations: [
    AppComponent,
    MoviesContainerComponent,
    ActionModalComponent,
    MovieComponent,
    VerifyModalComponent,
    CapitalizePipe,
    OnlyNumberDirective,
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
    MatSnackBarModule,
    ReactiveFormsModule,
  ],
  entryComponents: [ActionModalComponent, VerifyModalComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
