import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AppState } from 'src/app/state/app.state';
import { Store } from '@ngrx/store';
import { IMovie, UserActions } from './../../model';
import { CapitalizePipe } from 'src/app/pipes/capitalize.pipe';

@Component({
  selector: 'app-action-modal',
  templateUrl: './action-modal.component.html',
  styleUrls: ['./action-modal.component.scss'],
  providers: [CapitalizePipe]
})
export class ActionModalComponent implements OnInit {
  movieDetails: IMovie;
  movieNames = [];
  form;
  title;
  constructor(public dialogRef: MatDialogRef<ActionModalComponent>, private store: Store<AppState>,
    private titlePipe: CapitalizePipe,
    @Inject(MAT_DIALOG_DATA) public data) { 
      this.movieDetails = data['movie'];
      this.form = data['form'];
      this.title = data['action'] === UserActions.new ? 'add new movie' : 'edit movie'
    }
    
    ngOnInit() {
      this.getMovieNames();  
    }

    
    getMovieNames() {
      const moviesSub$ = this.store.select('movies').subscribe(movies => {
        movies.forEach((movie: IMovie) => {
          this.movieNames.push(movie['Title']);
        });
      });
      moviesSub$.unsubscribe();
    }

    checkIsUniqueName(name) {
      name = this.titlePipe.transform(name);
      if (this.movieNames.filter(movieName => movieName === name).length > 0 && name !== this.movieDetails['Title'] ) {
        this.form.get('Title').setErrors({duplicate : true});
      } else {
        this.form.get('Title').setValue(this.titlePipe.transform(name));
      }
    }

    onNoClick(): void {
      this.dialogRef.close();
    }
    
  }