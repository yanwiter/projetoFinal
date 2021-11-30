import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { Component, OnInit } from '@angular/core';
import { Endereco } from 'src/app/models/Endereco';
import { EnderecoService } from 'src/app/services/endereco.service';

@Component({
  selector: 'app-cadastrar-endereco',
  templateUrl: './cadastrar-endereco.component.html',
  styleUrls: ['./cadastrar-endereco.component.css']
})
export class CadastrarEnderecoComponent implements OnInit {
  endereco: Endereco = {
    id:            '',
    endereco:       '',
    cep:            '',
    numResidencia:  '',
    complemento:    '',
    cidade:         '',
    uf:             '',
    cliente:        ''
  };

  // nomeComp: FormControl = new FormControl(null, Validators.required);
  // sexo: FormControl = new FormControl(null);
  // estCivil: FormControl = new FormControl(null);
  // nascimento: FormControl = new FormControl(null);
  // cpf: FormControl = new FormControl(null, Validators.required);
  // rg: FormControl = new FormControl(null, Validators.required);
  // telefone: FormControl = new FormControl(null, Validators.pattern('[9-9999-9999]'));
  // cnh: FormControl = new FormControl(null, Validators.required);
  // email: FormControl = new FormControl(null, Validators.email);
  // endereco: FormControl = new FormControl(null);

  constructor(
    private service: EnderecoService,
    private toast:    ToastrService,
    private router:          Router,
    private route:   ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.endereco.cliente = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void {
    this.service.findById(this.endereco.cliente).subscribe(resposta => {
      this.endereco = resposta;
    })
  }

  create(): void {
    this.service.create(this.endereco).subscribe(() => {
        this.toast.success('Endereco cadastrado com sucesso', 'Endereço');
        this.router.navigate(['enderecoList']);
      }, ex => {
        console.log(ex);
        if (ex.error.errors) {
          ex.error.errors.forEach((element: any) => {
            this.toast.error(element.message);
          });
        } else {
          this.toast.error(ex.error.message);
        }
      })
  }

}