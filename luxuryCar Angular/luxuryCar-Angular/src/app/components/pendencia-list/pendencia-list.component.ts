import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pendencia-list',
  templateUrl: './pendencia-list.component.html',
  styleUrls: ['./pendencia-list.component.css'],
})
export class PendenciaListComponent implements OnInit {
  constructor(private toast: ToastrService) {}

  ngOnInit(): void {
    this.toast.info('Você está na lista de pendência veícular', 'Olá,');
  }
}
