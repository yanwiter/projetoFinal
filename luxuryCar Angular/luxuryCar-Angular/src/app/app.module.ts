import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SobreNosComponent } from './components/sobre-nos/sobre-nos.component';
import { ContatoComponent } from './components/contato/contato.component';
import { MarcasDisponiveisComponent } from './components/marcas-disponiveis/marcas-disponiveis.component';
import { NavbarHomeComponent } from './components/navbar-home/navbar-home.component';
import { NavbarCrudComponent } from './components/navbar-crud/navbar-crud.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [AppComponent, HomeComponent, LoginComponent, SobreNosComponent, ContatoComponent, MarcasDisponiveisComponent, NavbarHomeComponent, NavbarCrudComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
