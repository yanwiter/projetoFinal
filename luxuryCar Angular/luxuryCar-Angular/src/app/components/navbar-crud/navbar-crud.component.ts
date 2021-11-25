import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs/internal/observable/from';

@Component({
  selector: 'app-navbar-crud',
  templateUrl: './navbar-crud.component.html',
  styleUrls: ['./navbar-crud.component.css'],
})
export class NavbarCrudComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  abrirCadastrarVeiculo() {
    window.location.href = 'cadastrarVeiculo';
  }
  abrirCadastrarAluguel() {
    window.location.href = 'cadastrarAluguel';
  }
  abrirCadastrarCliente() {
    window.location.href = 'cadastrarCliente';
  }
  aAbrirListaVeiculo() {
    window.location.href = 'carroList';
  }
  abrirListaCliente() {
    window.location.href = 'clienteList';
  }
  abrirEditarCliente() {
    window.location.href = 'editCliente';
  }
  abrirEditarCarro() {
    window.location.href = 'editCarro';
  }
  logout(){
    window.location.href = 'login';
  }
}
