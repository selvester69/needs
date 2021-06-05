import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../common/dialog/dialog.component';
import { ProduitService } from '../produit.service';

export const filterListConst = ['Tous', 'Immoblier', 'Véhicules', 'Appartemmet', 'Informatique', 'Maison Et Jardin'];
@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  prodList: any[] = [];
  filter = filterListConst;
  selectedFilter: any;
  constructor(private produitService: ProduitService, public dialog: MatDialog) { }
  FilterClick(filter) {
    this.selectedFilter = filter;
  }
  ngOnInit(): void {
    this.loadProd();
    this.selectedFilter = this.filter[0];
  }

  loadProd() {
    this.produitService.getAllProduits().subscribe((prods: any[]) => {
      this.prodList = prods as [];
      console.log(prods);
    });
    console.log(this.prodList);
  }
  onPreview(prod) {
    const dialogRef = this.dialog.open(DialogComponent, {
      maxWidth: '50vw',
      maxHeight: '80vh',
      data: { prod: prod }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

}
