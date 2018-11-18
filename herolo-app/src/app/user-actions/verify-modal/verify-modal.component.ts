import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IMovie } from 'src/app/model';

@Component({
  selector: 'app-verify-modal',
  templateUrl: './verify-modal.component.html',
  styleUrls: ['./verify-modal.component.scss']
})
export class VerifyModalComponent {
  movieTitle;
  constructor(public dialogRef: MatDialogRef<VerifyModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IMovie) { 
      this.movieTitle = data['movie'].Title;
    }
    
    onNoClick(): void {
      this.dialogRef.close();
    }

}
