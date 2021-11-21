import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SobreNosComponent } from './components/sobre-nos/sobre-nos.component';
import { LoginComponent } from './components/login/login.component';
import { MarcasDisponiveisComponent } from './components/marcas-disponiveis/marcas-disponiveis.component';
import { ContatoComponent } from './components/contato/contato.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sobreNos', component: SobreNosComponent },
  { path: 'marcasDisponiveis', component: MarcasDisponiveisComponent },
  { path: 'contato', component: ContatoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
