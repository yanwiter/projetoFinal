import { Cliente } from './../../models/Cliente';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cadastrar-cliente',
  templateUrl: './cadastrar-cliente.component.html',
  styleUrls: ['./cadastrar-cliente.component.css'],
})
export class CadastrarClienteComponent implements OnInit {

  cliente: Cliente = {
    id:         undefined,
    nomeComp:   '',
    sexo:       undefined,
    estCivil:   undefined,
    nascimento: '',
    cpf:        '',
    rg:         '',
    telefone:   '',
    cnh:        '',
    email:      '',
    endereco:   undefined
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
    private service: ClienteService,
    private toast: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {}

    // liberarCadastrar(): boolean {
    //   return this.nomeComp.valid && this.cpf.valid 
    //    && this.cnh.valid && this.email.valid
    // }


  create(): void {
    this.service.create(this.cliente).subscribe(resposta => {
        this.toast.success('Cliente cadastrado com sucesso', 'Cadastro');
        this.router.navigate(['clientes']);
      }, ex => {
        if (ex.error.errors) {
          ex.error.errors.forEach((element: any) => {
            this.toast.error(element.message);
          });
        } else {
          this.toast.error(ex.error.message);
        }
      }
    );
  }
}
