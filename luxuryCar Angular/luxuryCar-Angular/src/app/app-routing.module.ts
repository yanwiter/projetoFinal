import { DeletarVeiculoComponent } from './components/deletar-veiculo/deletar-veiculo.component';
import { DebitoClientesComponent } from './components/debito-clientes/debito-clientes.component';
import { PendenciaListComponent } from './components/pendencia-list/pendencia-list.component';
import { AluguelListComponent } from './components/aluguel-list/aluguel-list.component';
import { CadastrarPendenciaVeicularComponent } from './components/cadastrar-pendencia-veicular/cadastrar-pendencia-veicular.component';
import { EditarVeiculoComponent } from './components/editar-veiculo/editar-veiculo.component';
import { EditarClienteComponent } from './components/editar-cliente/editar-cliente.component';
import { ClienteListComponent } from './components/cliente-list/cliente-list.component';
import { CarroListComponent } from './components/carro-list/carro-list.component';
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
import { ClienteDeleteComponent } from './components/deletar-cliente/cliente-delete/cliente-delete.component';
import { CadastrarEnderecoComponent } from './components/cadastrar-endereco/cadastrar-endereco.component';
import { EnderecoListComponent } from './components/endereco-list/endereco-list.component';



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
  { path: 'carroList', component: CarroListComponent },
  { path: 'clienteList', component: ClienteListComponent },
  { path: 'clienteList/delete/:id', component: ClienteDeleteComponent },
  { path: 'clienteList/cadastrarEndereco/:id', component: CadastrarEnderecoComponent },
  { path: 'clienteList/enderecoList/:id', component: EnderecoListComponent },
  { path: 'clienteList/editarCliente/:id', component: EditarClienteComponent },
  { path: 'carroList/editarVeiculo/:id', component: EditarVeiculoComponent },
  { path: 'carroList/deleteVeiculo/:id', component: DeletarVeiculoComponent },
  {
    path: 'cadastrarPendenciaVeicular',
    component: CadastrarPendenciaVeicularComponent,
  },
  { path: 'debitoCliente', component: DebitoClientesComponent },
  { path: 'aluguelList', component: AluguelListComponent },
  { path: 'pendenciaList', component: PendenciaListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
