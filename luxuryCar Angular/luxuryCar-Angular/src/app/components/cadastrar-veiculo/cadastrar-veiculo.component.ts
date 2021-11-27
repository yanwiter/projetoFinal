import { Component, OnInit } from '@angular/core';
import { Carro } from '../../models/carro';
import { FormControl, Validators } from '@angular/forms';
import { CarroService } from 'src/app/services/carro.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cadastrar-veiculo',
  templateUrl: './cadastrar-veiculo.component.html',
  styleUrls: ['./cadastrar-veiculo.component.css'],
})
export class CadastrarVeiculoComponent implements OnInit {
  Carro: Carro = {
    id: undefined,
    marca: '',
    nome: '',
    modelo: '',
    cor: '',
    placa: '',
    chassi: '',
    renavam: '',
    combustivel: '',
    vCompra: undefined,
    uf: '',
    dataCompra: undefined,
    numPortas: '',
    descricao: '',
    opcionais: [],
    ano: undefined
  };

  marca: FormControl = new FormControl(null, Validators.required);
  nomeVeiculo: FormControl = new FormControl(null, Validators.required);
  modeloVeiculo: FormControl = new FormControl(null, Validators.required);
  cor: FormControl = new FormControl(null, Validators.required);
  numPlaca: FormControl = new FormControl(null, Validators.required);
  numChassi: FormControl = new FormControl(null, Validators.required);
  numRenavam: FormControl = new FormControl(null, Validators.required);
  combustivel: FormControl = new FormControl(null, Validators.required);
  valorCompra: FormControl = new FormControl(null, Validators.required);
  uf: FormControl = new FormControl(null, Validators.required);
  dataCompra: FormControl = new FormControl(null, Validators.required);
  numPortas: FormControl = new FormControl(null, Validators.required);
  descVeiculo: FormControl = new FormControl(null, Validators.required);
  opcionais: FormControl = new FormControl(null, Validators.required);

  constructor(
    /*private service: CarroService,
    private toast: ToastrService,*/
  ) {}

  ngOnInit(): void {}
}
