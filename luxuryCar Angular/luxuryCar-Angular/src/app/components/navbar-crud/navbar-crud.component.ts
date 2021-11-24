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

  AbrirCadastrarVeiculo() {
    window.location.href = 'cadastrarVeiculo';
  }
  AbrirCadastrarAluguel() {
    window.location.href = 'cadastrarAluguel';
  }
  AbrirCadastrarCliente() {
    window.location.href = 'cadastrarCliente';
  }
  AbrirListaVeiculo() {
    window.location.href = 'carroList';
  }
  AbrirListaCliente() {
    window.location.href = 'clienteList';
  }
  AbrirEditarCliente() {
    window.location.href = 'editCliente';
  }
  AbrirEditarCarro() {
    window.location.href = 'editCarro';
  }
}
