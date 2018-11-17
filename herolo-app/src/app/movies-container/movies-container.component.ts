import { Component, OnInit, Input } from '@angular/core';
import { CapitalizePipe } from './../pipes/capitalize.pipe';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { MatDialog } from '@angular/material';
import { FormBuilder, Validators } from '@angular/forms';
import { EditComponent } from '../movie/edit/edit.component';
import * as MoviesActions from './../state/actions/movies.action';
import { UserActions } from '../model';

@Component({
  selector: 'app-movies-container',
  templateUrl: './movies-container.component.html',
  styleUrls: ['./movies-container.component.scss'],
  providers: [CapitalizePipe]
})
export class MoviesContainerComponent implements OnInit {
  @Input() movies;
  form;
  constructor(private store: Store<AppState>, private dialog: MatDialog, private _fb: FormBuilder, private capitalize: CapitalizePipe) { }
  
  ngOnInit() {
  }
  
  buildForm() {
    this.form = this._fb.group({
      imdbID: [{value: this.generateRandomId(), disabled: true }],
      Title: ['', Validators.required ],
      Year: ['', Validators.compose([Validators.required, Validators.min(1900), Validators.max(2018)]) ],
      Runtime: ['', Validators.required ],
      Genre: ['', Validators.required ],
      Director: ['', Validators.required ],
    });
  }
  
  addNewMovie(): void {
    this.buildForm();
    const dialogRef = this.dialog.open(EditComponent, {
      width: '350px',
      height: '550px',
      data: {movie: null, form: this.form, action: UserActions.new}
    });
    dialogRef.afterClosed().subscribe(result => {
      let payload = this.form.value;
      payload['Title'] = this.capitalize.transform(this.form.get('Title').value);
      if (result) this.store.dispatch(new MoviesActions.AddMovie(payload))
    });
  }

  generateRandomId() {
    let pad = (number, length) => {
      var str = 'tt' + number;
      while(str.length < length) {
        str = '0' + str;
      }
      return str;
    }
		return pad(Math.floor((Math.random() * 2155529) + 1), 7);
  }   
}
