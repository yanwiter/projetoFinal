import { Carro } from './../../models/Carro';
import { Router } from '@angular/router';
import { CarroService } from './../../services/carro.service';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-carro-list',
  templateUrl: './carro-list.component.html',
  styleUrls: ['./carro-list.component.css'],
})
export class CarroListComponent implements OnInit {
  ELEMENT_DATA: Carro[] = [
    {
      id: 1,
      marca: 'Ferrari',
      nomeVeiculo: 'GTO',
      modeloVeiculo: 'Aspirado',
      anoModelo: '2020',
      cor: 'Vermelho',
      numPlaca: 'GTE-2017',
      numChassi: '123456789',
      numRenavam: '34993520752',
      combustivel: 'Gasolina',
      valorCompra: '1.700.000',
      uf: 'MG',
      dataCompra: 2020-12 -12,
      numPortas: '4',
      descVeiculo: 'Veículo alienado ao banco bradesco',
      opcionais: ['Trava', 'Teto', 'Direção'],
    },
    {
      id: 2,
      marca: 'Ferrari',
      nomeVeiculo: 'GTO',
      modeloVeiculo: 'Aspirado',
      anoModelo: '2021',
      cor: 'Vermelho',
      numPlaca: 'GTE-2017',
      numChassi: '123456789',
      numRenavam: '34993520752',
      combustivel: 'Gasolina',
      valorCompra: '1.700.000',
      uf: 'MG',
      dataCompra: '10-08-2021',
      numPortas: '4',
      descVeiculo: 'Veículo alienado ao banco bradesco',
      opcionais: ['Trava', 'Teto', 'Direção'],
    },
  ];

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
  ];
  dataSource = new MatTableDataSource<Carro>(this.ELEMENT_DATA);

  //@ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service: CarroService, private router: Router) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe((resposta) => {
      this.ELEMENT_DATA = resposta;
      this.dataSource = new MatTableDataSource<Carro>(resposta);
      //this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
