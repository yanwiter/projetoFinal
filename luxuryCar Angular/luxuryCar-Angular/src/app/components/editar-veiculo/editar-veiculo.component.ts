import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Carro } from 'src/app/models/carro';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-editar-veiculo',
  templateUrl: './editar-veiculo.component.html',
  styleUrls: ['./editar-veiculo.component.css'],
})
export class EditarVeiculoComponent implements OnInit {
  carro: Carro = new Carro();

  constructor(
    private carroService: ClienteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {}
}
