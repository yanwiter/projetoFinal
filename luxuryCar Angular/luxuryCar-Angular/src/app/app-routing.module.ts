import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SobreNosComponent } from './components/sobre-nos/sobre-nos.component';
import { LoginComponent } from './components/login/login.component';
import { MarcasDisponiveisComponent } from './components/marcas-disponiveis/marcas-disponiveis.component';
import { ContatoComponent } from './components/contato/contato.component';
import { HomeCrudComponent } from './components/home-crud/home-crud.component';
import { CadastrarVeiculoComponent } from './components/cadastrar-veiculo/cadastrar-veiculo.component';
import { CadastrarAluguelComponent } from './components/cadastrar-aluguel/cadastrar-aluguel.component';
import { CadastrarClienteComponent } from './components/cadastrar-cliente/cadastrar-cliente.component';
import { EditarClienteComponent } from './components/editar-cliente/editar-cliente.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sobreNos', component: SobreNosComponent },
  { path: 'marcasDisponiveis', component: MarcasDisponiveisComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'homeCrud', component: HomeCrudComponent },
  { path: 'cadastrarVeiculo', component: CadastrarVeiculoComponent },
  { path: 'cadastrarAluguel', component: CadastrarAluguelComponent },
  { path: 'cadastrarCliente', component: CadastrarClienteComponent },
  { path: 'editarCliente', component: EditarClienteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
