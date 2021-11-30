import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-aluguel-list',
  templateUrl: './aluguel-list.component.html',
  styleUrls: ['./aluguel-list.component.css'],
})
export class AluguelListComponent implements OnInit {
  constructor(private toast: ToastrService) {}

  ngOnInit(): void {
        this.toast.info('Você está na lista de aluguéis', 'Olá,');
  }
}
