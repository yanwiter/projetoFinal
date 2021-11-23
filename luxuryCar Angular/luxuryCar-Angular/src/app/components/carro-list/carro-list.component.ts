
import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Carro } from 'src/app/models/carro';
import { CarroService } from '../../services/carro.service';

@Component({
  selector: 'app-carro-list',
  templateUrl: './carro-list.component.html',
  styleUrls: ['./carro-list.component.css'],
})
export class CarroListComponent implements OnInit {

  ELEMENT_DATA: Carro[] = [];
  constructor(private service: CarroService) {}

  ngOnInit(): void {
    this.findAll();
  }

  displayedColumns: string[] = [
    'position',
    'name',
    'weight',
    'symbol',
    'acoes',
  ];

  dataSource = new MatTableDataSource<Carro>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  findAll() {
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
