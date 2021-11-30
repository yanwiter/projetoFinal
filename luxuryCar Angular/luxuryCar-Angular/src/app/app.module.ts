import { CadastrarClienteComponent } from './components/cadastrar-cliente/cadastrar-cliente.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { ToastrModule } from 'ngx-toastr';

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
import { CadastrarAluguelComponent } from './components/cadastrar-aluguel/cadastrar-aluguel.component';
import { EditarClienteComponent } from './components/editar-cliente/editar-cliente.component';
import { EditarVeiculoComponent } from './components/editar-veiculo/editar-veiculo.component';
import { CarroListComponent } from './components/carro-list/carro-list.component';
import { ClienteListComponent } from './components/cliente-list/cliente-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CadastrarPendenciaVeicularComponent } from './components/cadastrar-pendencia-veicular/cadastrar-pendencia-veicular.component';
import { DebitoClientesComponent } from './components/debito-clientes/debito-clientes.component';
import { AluguelListComponent } from './components/aluguel-list/aluguel-list.component';
import { PendenciaListComponent } from './components/pendencia-list/pendencia-list.component';
import { NgModule } from '@angular/core';


// Para trabalhar com formulários no Angular 12
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
// Imports para componentes do Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { ClienteDeleteComponent } from './components/deletar-cliente/cliente-delete/cliente-delete.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { DeletarVeiculoComponent } from './components/deletar-veiculo/deletar-veiculo.component';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

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
    CadastrarPendenciaVeicularComponent,
    DebitoClientesComponent,
    AluguelListComponent,
    PendenciaListComponent,
    ClienteDeleteComponent,
    DeletarVeiculoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // Forms
    FormsModule,
    ReactiveFormsModule,
    // Requisições http
    HttpClientModule,
    // Angular Material
    MatFormFieldModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule,
    MatTableModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    MatDialogModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      closeButton: true,
      progressBar: true,
    }),
    NgxMaskModule.forRoot(),
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
