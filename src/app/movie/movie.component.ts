import { Component, OnInit, Input } from '@angular/core';
import {MatDialog, MatSnackBar} from '@angular/material';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import * as MoviesActions from './../state/actions/movies.action';
import { FormBuilder, Validators } from '@angular/forms';
import { CapitalizePipe } from 'src/app/pipes/capitalize.pipe';
import { UserActions } from '../model';
import { VerifyModalComponent } from '../user-actions/verify-modal/verify-modal.component';
import { ActionModalComponent } from '../user-actions/action-modal/action-modal.component';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
  providers: [CapitalizePipe]
  
})
export class MovieComponent implements OnInit {
  @Input() movie;
  form;
  constructor(private store: Store<AppState>, private dialog: MatDialog,
    private _fb: FormBuilder, private snackBar: MatSnackBar) { }
    
    ngOnInit() {
      this.buildForm();
      
    }
    
    buildForm() {
      this.form = this._fb.group({
        imdbID: [{value: this.movie['imdbID'], disabled: true }],
        Title: [this.movie['Title'], Validators.compose([Validators.required]) ],
        Year: [this.movie['Year'], Validators.compose([Validators.required, Validators.min(1900), Validators.max(2018)]) ],
        Runtime: [this.movie['Runtime'], Validators.required ],
        Genre: [this.movie['Genre'], Validators.required ],
        Director: [this.movie['Director'], Validators.required ],
      });
    }
    
    openDeleteDialog(): void {
      const dialogRef = this.dialog.open(VerifyModalComponent, {
        width: '250px',
        data: {movie: this.movie}
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.store.dispatch(new MoviesActions.DeleteMovie(this.movie))
          this.snackBar.open('Movie deleted successfully', null, { duration: 2000 });
        }
      });
    }
    openEditDialog(): void {
      const dialogRef = this.dialog.open(ActionModalComponent, {
        width: '350px',
        height: '550px',
        data: {movie: this.movie, form: this.form, action: UserActions.edit}
      });
      dialogRef.afterClosed().subscribe(result => {
        const payload = this.form.value;
        payload['imdbID'] = this.form.get('imdbID').value;
        if (result) {
          this.store.dispatch(new MoviesActions.EditMovie(payload));
          this.snackBar.open('Movie is edited successfully', null, { duration: 2000 });
        } else {
          this.buildForm();
        }
      });
    }
    
  }
  