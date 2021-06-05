import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProduitService } from 'src/app/produit.service';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { serverResponse } from '../../models/product.models';
import { MatDialog } from '@angular/material/dialog';
import { DeleteProduitModalComponent } from '../delete-produit-modal/delete-produit-modal.component';



@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['./liste-produits.component.css']
})
export class ListeProduitsComponent implements OnInit {
  // displayedColumns: string[] = ['image', 'prix', 'nom', 'categorie'];
  @ViewChild('closeDelete') closeDelete: ElementRef;
  products: any[] = [];
  public produits: any[] = [];
  produitDelete;
  produitsList: any[] = [];
  originalList: any[];
  searchProduct: string = '';

  // 
  // image: string;
  // prix: string;
  // nom: string;
  // categorie: string;
  // 
  // 
  constructor(private produitService: ProduitService, public dialog: MatDialog) {

  }

  ngOnInit(): void {
    // @ts-ignore
    this.produitService.getAllProduits().subscribe((prods: any[]) => {
      this.products = prods as [];
      this.produitsList = Object.assign([], this.products);
      console.log(prods);
    });
    console.log(this.products);
  }
  openDeleteModal(event) {
    this.produitDelete = event;
    const dialogRef = this.dialog.open(DeleteProduitModalComponent, {
      maxWidth: '50vw',
      maxHeight: '80vh',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.delete();
      }
    });
  }

  // deleteRow(event) {
  //   this.produitDelete = event;
  // }

  delete() {
    let index = this.products.indexOf(this.produitDelete);
    this.products.splice(index, 1);
    this.produitService.deleteProduit(this.produitDelete._id).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }

    )
    // this.closeDelete.nativeElement.click();
    // document.querySelector('modal-backdrop').classList.remove('in')
    // document.querySelectorAll('modal-backdrop fade').forEach(modal=>{

    // })
    // document.getElementById("deleteModal").classList.remove('modal-backdrop');
  }
  onValueChange(event) {
    console.log(event);
    if (event === '') {
      this.products = this.produitsList;
    }

  }
  onFilter() {
    console.log(this.products);
    this.products = this.products.filter(prod => {
      if (prod.nom.toLowerCase().startsWith(this.searchProduct.toLowerCase())
        || prod.prix.toLowerCase().startsWith(this.searchProduct.toLowerCase())
        || prod.reference.toLowerCase().startsWith(this.searchProduct.toLowerCase())
        || prod.description.toLowerCase().startsWith(this.searchProduct.toLowerCase())
        || prod.code.toLowerCase().startsWith(this.searchProduct.toLowerCase())
        || prod.categorie.toLowerCase().startsWith(this.searchProduct.toLowerCase())) {
        return true;
      }
    });

  }
  // getAllProduits(){
  // this.produitsList=[];

  // this.produitService.getAllProduits().subscribe(
  // result =>{
  // this.produitsList=result;
  // this.produits = result;
  // alert(JSON.stringify(this.produits))
  // },
  // error =>{
  // console.log(error);
  // }
  // )
  // }

  // filter(value) {
  //   console.log(value);
  //   if (value != null || value != '') {
  //     this.produitsList = [];
  //     this.produitsList = this.produits.filter((ct) => {
  //       return ct.nom.toLowerCase().includes(value.toLowerCase())
  //     })
  //   } else {
  //     this.produitsList = [];
  //     this.produitsList = this.produits;
  //   }

  // }
}