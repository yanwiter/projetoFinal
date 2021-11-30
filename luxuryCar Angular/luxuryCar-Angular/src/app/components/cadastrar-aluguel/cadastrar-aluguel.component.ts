import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cadastrar-aluguel',
  templateUrl: './cadastrar-aluguel.component.html',
  styleUrls: ['./cadastrar-aluguel.component.css'],
})
export class CadastrarAluguelComponent implements OnInit {
  constructor(private toast: ToastrService) {}

  ngOnInit(): void {
     this.toast.info('Você está no cadastro de aluguel de veículos', 'Olá,');
  }
}
