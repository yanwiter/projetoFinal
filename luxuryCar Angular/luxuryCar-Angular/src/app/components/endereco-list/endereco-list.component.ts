import { Component, OnInit } from '@angular/core';
import { Endereco } from 'src/app/models/Endereco';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EnderecoService } from 'src/app/services/endereco.service';

@Component({
  selector: 'app-endereco-list',
  templateUrl: './endereco-list.component.html',
  styleUrls: ['./endereco-list.component.css']
})
export class EnderecoListComponent implements OnInit {
  ELEMENT_DATA: Endereco[] = [];

  displayedColumns: string[] = ['id', 'endereco', 'cep', 'numResidencia', 'complemento', 'cidade', 'uf', 'cliente', 'acoes'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private service: EnderecoService) { }

  dataSource = new MatTableDataSource<Endereco>(this.ELEMENT_DATA);

  ngOnInit(): void { 
    
    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe(resposta => {
      this.ELEMENT_DATA = resposta
      this.dataSource = new MatTableDataSource<Endereco>(resposta);
      this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
