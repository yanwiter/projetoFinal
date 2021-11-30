import { CarroService } from './../../services/carro.service';
import { Component, OnInit } from '@angular/core';
import { Carro } from 'src/app/models/carro';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-deletar-veiculo',
  templateUrl: './deletar-veiculo.component.html',
  styleUrls: ['./deletar-veiculo.component.css'],
})
export class DeletarVeiculoComponent implements OnInit {
  carro: Carro = {
    id: undefined,
    marca: undefined,
    nome: undefined,
    modelo: undefined,
    ano: undefined,
    cor: undefined,
    placa: undefined,
    chassi: undefined,
    renavam: undefined,
    combustivel: undefined,
    vCompra: undefined,
    uf: undefined,
    dataCompra: undefined,
    numPortas: undefined,
    descricao: undefined,
    opcionais: undefined,
  };

  constructor(
    private service: CarroService,
    private toast: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.toast.info('Você está na exclusão de veículo', 'Olá,');
    this.carro.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void {
    this.service.findById(this.carro.id).subscribe((resposta) => {
      this.carro = resposta;
    });
  }

  delete(): void {
    this.service.delete(this.carro.id).subscribe(
      () => {
        this.toast.success('Veículo deletado com sucesso', 'Delete');
        this.router.navigate(['carroList']);
      },
      (ex) => {
        if (ex.error.errors) {
          ex.error.errors.forEach((element) => {
            this.toast.error('Opss ',element.message);
          });
        } else {
          this.toast.error(ex.error.message);
        }
      }
    );
  }
}
