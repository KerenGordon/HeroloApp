import { Component, OnInit, Input } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { ActionModalComponent } from '../action-modal/action-modal.component';
import * as MoviesActions from './../state/actions/movies.action';
import { EditComponent } from './edit/edit.component';
import { FormBuilder, Validators } from '@angular/forms';
import { CapitalizePipe } from 'src/app/pipes/capitalize.pipe';
import { UserActions } from '../model';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
  providers: [CapitalizePipe]

})
export class MovieComponent implements OnInit {
  @Input() movie;
  form;
  constructor(private store: Store<AppState>, private dialog: MatDialog, private _fb: FormBuilder, private capitalize: CapitalizePipe) { }

  ngOnInit() {
    this.buildForm();

  }

  buildForm() {
    this.form = this._fb.group({
      imdbID: [{value: this.movie['imdbID'], disabled: true }],
      Title: [this.movie['Title'], Validators.required ],
      Year: [this.movie['Year'], Validators.compose([Validators.required, Validators.min(1900), Validators.max(2018)]) ],
      Runtime: [this.movie['Runtime'], Validators.required ],
      Genre: [this.movie['Genre'], Validators.required ],
      Director: [this.movie['Director'], Validators.required ],
    });
  }

  openDeleteDialog(): void {
    const dialogRef = this.dialog.open(ActionModalComponent, {
      width: '250px',
      data: {movie: this.movie}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) this.store.dispatch(new MoviesActions.DeleteMovie(this.movie))
      });
  }
  openEditDialog(): void {
    const dialogRef = this.dialog.open(EditComponent, {
      width: '350px',
      height: '550px',
      data: {movie: this.movie, form: this.form, action: UserActions.edit}
    });
    dialogRef.afterClosed().subscribe(result => {
      let payload = this.form.value;
      payload['imdbID'] = this.form.get('imdbID').value;
      payload['Title'] = this.capitalize.transform(this.form.get('Title').value);
      if (result) this.store.dispatch(new MoviesActions.EditMovie(payload))
      });
  }

}
