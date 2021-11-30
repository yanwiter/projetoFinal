import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-debito-clientes',
  templateUrl: './debito-clientes.component.html',
  styleUrls: ['./debito-clientes.component.css'],
})
export class DebitoClientesComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'tipoDebito',
    'valorDebito',
    'acoes',
  ];

  constructor(private toast: ToastrService) {}

  ngOnInit(): void {
    this.toast.info('Você está no cadastro de débito', 'Olá,');
  }
}
