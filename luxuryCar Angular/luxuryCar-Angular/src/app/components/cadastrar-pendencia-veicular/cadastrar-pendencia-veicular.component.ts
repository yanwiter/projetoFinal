import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cadastrar-pendencia-veicular',
  templateUrl: './cadastrar-pendencia-veicular.component.html',
  styleUrls: ['./cadastrar-pendencia-veicular.component.css'],
})
export class CadastrarPendenciaVeicularComponent implements OnInit {
  constructor(private toast: ToastrService) {}

  ngOnInit(): void {
    this.toast.info('Você está no cadastro de pendência veícular', 'Olá,');
  }
}
