import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IMovie } from './../model';

@Component({
  selector: 'app-action-modal',
  templateUrl: './action-modal.component.html',
  styleUrls: ['./action-modal.component.scss']
})
export class ActionModalComponent {
  movieTitle;
  constructor(public dialogRef: MatDialogRef<ActionModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IMovie) { 
      this.movieTitle = data['movie'].Title;
    }
    
    onNoClick(): void {
      this.dialogRef.close();
    }

}
