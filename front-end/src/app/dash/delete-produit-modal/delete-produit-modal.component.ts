import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/common/dialog/dialog.component';

@Component({
  selector: 'app-delete-produit-modal',
  templateUrl: './delete-produit-modal.component.html',
  styleUrls: ['./delete-produit-modal.component.css']
})
export class DeleteProduitModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  delete() {
    this.dialogRef.close(true);
  }
  closeModal() {
    this.dialogRef.close(false);
  }

}
