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

  ELEMENT_DATA: Cliente[] = [];

  displayedColumns: string[] = ['id', 'nomeComp', 'sexo', 'estCivil', 'nascimento', 'cpf', 'rg', 'tel', 'cnh', 'email', 'acoes'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private service: ClienteService) { }

  dataSource = new MatTableDataSource<Cliente>(this.ELEMENT_DATA);

  ngOnInit(): void { 
    
    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe(resposta => {
      this.ELEMENT_DATA = resposta
      this.dataSource = new MatTableDataSource<Cliente>(resposta);
      this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
