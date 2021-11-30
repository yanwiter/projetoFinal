import { Carro } from '../../models/carro';
import { Router } from '@angular/router';
import { CarroService } from './../../services/carro.service';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-carro-list',
  templateUrl: './carro-list.component.html',
  styleUrls: ['./carro-list.component.css'],
})
export class CarroListComponent implements OnInit {
  ELEMENT_DATA: Carro[] = [];

  displayedColumns: string[] = [
    'id',
    'marca',
    'nomeVeiculo',
    'modeloVeiculo',
    'anoModelo',
    'cor',
    'numPlaca',
    'numChassi',
    'numRenavam',
    'combustivel',
    'valorCompra',
    'uf',
    'dataCompra',
    'numPortas',
    'descVeiculo',
    'opcionais',
    'acoes',
  ];
  dataSource = new MatTableDataSource<Carro>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  constructor(
    private toast: ToastrService,
    private service: CarroService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.toast.info('Você está na lista de veículos', 'Olá,');
    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe((resposta) => {
      this.ELEMENT_DATA = resposta;
      this.dataSource = new MatTableDataSource<Carro>(resposta);
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
