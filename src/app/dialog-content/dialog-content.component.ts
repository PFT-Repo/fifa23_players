import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-content',
  template: `
    <h1>{{ data.message }}</h1>
    <button mat-button (click)="close()">Close</button>
  `,
})
export class DialogContentComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogContentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  close(): void {
    this.dialogRef.close();
  }
}
