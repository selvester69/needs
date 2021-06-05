import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProduitsComponent } from './produits/produits.component';
import { ServicesComponent } from './services/services.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { DashboardComponent } from './dashboard/dashboard.component';


import { AjouterProduitComponent } from './dash/ajouter-produit/ajouter-produit.component';
import { ListeClientsComponent } from './dash/liste-clients/liste-clients.component';
import { ProfilComponent } from './profil/profil.component';
import { ProduitDetailComponent } from './produit-detail/produit-detail.component';
import { CommonModule } from '@angular/common';
import { ListeProduitsComponent } from './dash/liste-produits/liste-produits.component';
import { CommandefComponent } from './commandef/commandef.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './common/dialog/dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DeleteProduitModalComponent } from './dash/delete-produit-modal/delete-produit-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ProduitsComponent,
    ServicesComponent,
    SignupComponent,
    SigninComponent,
    DashboardComponent,
    AjouterProduitComponent,
    ListeClientsComponent,
    ProfilComponent,
    ProduitDetailComponent,
    ListeProduitsComponent,
    CommandefComponent,
    DialogComponent,
    DeleteProduitModalComponent

  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatIconModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
