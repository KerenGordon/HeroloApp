import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ActionModalComponent } from 'src/app/action-modal/action-modal.component';
import { AppState } from 'src/app/state/app.state';
import { Store } from '@ngrx/store';
import { IMovie } from './../../model';
import { CapitalizePipe } from 'src/app/pipes/capitalize.pipe';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  providers: [CapitalizePipe]
})
export class EditComponent implements OnInit {
  movieDetails: IMovie;
  movieNames = [];
  form;
  constructor(public dialogRef: MatDialogRef<ActionModalComponent>, private store: Store<AppState>,
    private titlePipe: CapitalizePipe,
    @Inject(MAT_DIALOG_DATA) public data) { 
      this.movieDetails = data['movie'];
      this.form = data['form'];
      console.log('this.form: ', this.form);
    }
    
    ngOnInit() {
      this.getMovieNames();  
    }

    
    getMovieNames() {
      let moviesSub$ = this.store.select('movies').subscribe(movies => {
        movies.forEach((movie: IMovie) => {
          this.movieNames.push(movie['Title']);
        });
      });
      moviesSub$.unsubscribe();
    }

    checkIsUniqueName(name) {
      name = this.titlePipe.transform(name);
      if (this.movieNames.filter(movieName => movieName === name).length > 0 && name !== this.movieDetails['Title'] ) {
        this.form.get('title').setErrors({duplicate : true});
      };
    }

    onNoClick(): void {
      this.dialogRef.close();
    }
    
  }
  