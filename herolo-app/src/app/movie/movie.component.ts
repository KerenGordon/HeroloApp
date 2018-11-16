import { Component, OnInit, Input } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { ActionModalComponent } from '../action-modal/action-modal.component';
import * as MoviesActions from './../state/actions/movies.action';


const actionComps = {
  delete: 'ActionModalComponent',
  edit: 'EditComponent'
}
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  @Input() movie;
  constructor(private store: Store<AppState>, private dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ActionModalComponent, {
      width: '250px',
      data: {movie: this.movie}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) this.store.dispatch(new MoviesActions.DeleteMovie(this.movie))
      });
  }

}
