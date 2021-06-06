import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ProduitService } from '../produit.service';
import { ConfirmBuyComponent } from './confirm-buy/confirm-buy.component';
export class User {
  Nom: string;
  Prenom: string;
  Addresse: string;
  Email: string;
  Telephone: string;
  Ville: string;
  constructor() {
    // this.Nom = '';
    // this.Prenom = '';
    // this.Addresse = '';
    // this.Email = '';
    // this.Telephone = '';
    // this.Ville = '';
  }
}
@Component({
  selector: 'app-commandef',
  templateUrl: './commandef.component.html',
  styleUrls: ['./commandef.component.css']
})
export class CommandefComponent implements OnInit {
  public produit: any;
  userForm: User;
  constructor(private route: ActivatedRoute, private produitService: ProduitService, public dialog: MatDialog) {
    this.userForm = new User();
  }

  ngOnInit(): void {
    this.produitsUser();
  }
  produitsUser() {
    let idProduit = this.route.snapshot.params.id;
    console.log(idProduit);
    this.produitService.getOneProduit(idProduit).subscribe(
      res => {
        console.log(res);
        this.produit = res;
      },
      err => {
        console.log(err);
      }

    )
  }

  onValidier() {
    console.log(this.userForm);
    const dialogRef = this.dialog.open(ConfirmBuyComponent, {
      maxWidth: '50vw',
      maxHeight: '80vh',
      data: {
        user: this.userForm,
        prod: this.produit,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        alert("success");
      }
    });
  }
}
