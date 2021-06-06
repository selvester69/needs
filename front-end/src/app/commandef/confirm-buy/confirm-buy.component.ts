import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/common/dialog/dialog.component';

@Component({
  selector: 'app-confirm-buy',
  templateUrl: './confirm-buy.component.html',
  styleUrls: ['./confirm-buy.component.css']
})
export class ConfirmBuyComponent implements OnInit {

  user: any;
  prod: any;
  constructor(public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.user = data.user;
    this.prod = data.prod;
  }

  ngOnInit(): void {
  }
  confirm() {
    window.print();
    this.dialogRef.close(true);
  }
  cancel() {
    this.dialogRef.close(false);
  }

}
