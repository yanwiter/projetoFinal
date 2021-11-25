import { Router } from '@angular/router';
import { ClienteService } from './../../services/cliente.service';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Cliente } from '../../models/Cliente';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css'],
})
export class ClienteListComponent implements OnInit {
  constructor(private service: ClienteService, private router: Router) {}
  clientes: Cliente[] = [];
  ngOnInit(): void {
    this.findAll();
  }

  /*displayedColumns: string[] = [
    'id',
    'nomeComp',
    'sexo',
    'estCivil',
    'nascimento',
    'cpf',
    'rg',
    'tel',
    'cnh',
    'email',
    'endereco',
  ];
  dataSource = new MatTableDataSource<Cliente>(this.clientes);

  //@ViewChild(MatPaginator) paginator: MatPaginator;


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
*/

  findAll(): void {
    this.service.findAll().subscribe((resposta) => {
      this.clientes = resposta;
      //this.dataSource.paginator = this.paginator;
    });
  }
}
