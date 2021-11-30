import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Carro } from 'src/app/models/carro';
import { CarroService } from 'src/app/services/carro.service';

@Component({
  selector: 'app-editar-veiculo',
  templateUrl: './editar-veiculo.component.html',
  styleUrls: ['./editar-veiculo.component.css'],
})
export class EditarVeiculoComponent implements OnInit {
  carro: Carro = new Carro();

  constructor(
    private service: CarroService,
    private toast: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.toast.info('Você está na edição de veículo', 'Olá,');
    this.carro.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }
  findById(): void {
    this.service.findById(this.carro.id).subscribe((resposta) => {
      this.carro = resposta;
    });
  }

  cancelar() {
    this.router.navigate(['carroList/']);
  }

  update(): void {
    this.service.update(this.carro).subscribe(
      () => {
        this.toast.success('Veículo atualizado com sucesso', 'Update');
        this.router.navigate(['carroList/']);
      },
      (ex) => {
        if (ex.error.errors) {
          ex.error.errors.forEach((element) => {
            this.toast.error('Opss',element.message);
          });
        } else {
          this.toast.error(ex.error.message);
        }
      }
    );
  }
}
