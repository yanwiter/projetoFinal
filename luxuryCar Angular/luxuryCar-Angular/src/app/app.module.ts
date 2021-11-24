import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { ToastrModule } from 'ngx-toastr';
import { MatFormFieldModule } from '@angular/material/form-field';

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
import { HomeCrudComponent } from './components/home-crud/home-crud.component';
import { CadastrarVeiculoComponent } from './components/cadastrar-veiculo/cadastrar-veiculo.component';
import { CadastrarClienteComponent } from './components/cadastrar-cliente/cadastrar-cliente.component';
import { CadastrarAluguelComponent } from './components/cadastrar-aluguel/cadastrar-aluguel.component';
import { EditarClienteComponent } from './components/editar-cliente/editar-cliente.component';
import { EditarVeiculoComponent } from './components/editar-veiculo/editar-veiculo.component';
import { CarroListComponent } from './components/carro-list/carro-list.component';
import { ClienteListComponent } from './components/cliente-list/cliente-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SobreNosComponent,
    ContatoComponent,
    MarcasDisponiveisComponent,
    NavbarHomeComponent,
    NavbarCrudComponent,
    FooterComponent,
    HomeCrudComponent,
    CadastrarVeiculoComponent,
    CadastrarClienteComponent,
    CadastrarAluguelComponent,
    EditarClienteComponent,
    EditarVeiculoComponent,
    CarroListComponent,
    ClienteListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    MatDialogModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    ToastrModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
