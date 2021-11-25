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
  ELEMENT_DATA: Cliente[] = [
    {
    id:1,
    nomeComp:'Yan Witer Rocha Barbosa',
    sexo:'Masculino',
    estCivil:'Solteiro',
    nascimento:'19-05-1998',
    cpf:'123.456.789-90',
    rg:'123456789',
    tel:'88888-8888',
    cnh:'12345678901',
    email:'yanwiter@gmail.com',
    endereco:'Av. padre joaquim martins 1320 ap 802',
    },
  ];

  displayedColumns: string[] = [
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
  dataSource = new MatTableDataSource<Cliente>(this.ELEMENT_DATA);

  //@ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service: ClienteService, private router: Router) {}

  ngOnInit(): void {}

  findAll(): void {
    this.service.findAll().subscribe((resposta) => {
      this.ELEMENT_DATA = resposta;
      this.dataSource = new MatTableDataSource<Cliente>(resposta);
      //this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
