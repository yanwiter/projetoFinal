import { Component, OnInit } from '@angular/core';
import { FormControl, RequiredValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from './../../models/Cliente';

@Component({
  selector: 'app-cadastrar-cliente',
  templateUrl: './cadastrar-cliente.component.html',
  styleUrls: ['./cadastrar-cliente.component.css'],
})
export class CadastrarClienteComponent implements OnInit {
  cliente: Cliente = {
    id: '',
    nomeComp: '',
    sexo: '',
    estCivil: '',
    nascimento: '',
    cpf: '',
    rg: '',
    telefone: '',
    cnh: '',
    email: '',
    endereco: '',
  };

  nomeComp: FormControl = new FormControl(null, Validators.required);
  sexo: FormControl = new FormControl(null, Validators.required);
  estCivil: FormControl = new FormControl(null, Validators.required);
  nascimento: FormControl = new FormControl(null);
  cpf: FormControl = new FormControl(null, Validators.required);
  rg: FormControl = new FormControl(null);
  cnh: FormControl = new FormControl(null, Validators.required);
  // telefone: FormControl = new FormControl(null, Validators.pattern('[(00) 00000-0000]'));
  email: FormControl = new FormControl(null, Validators.email);
  endereco: FormControl = new FormControl(null);

  constructor(
    private service: ClienteService,
    private toast: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.toast.info('Você está no cadastro de clientes', 'Olá,');
  }

  create(): void {
    this.service.create(this.cliente).subscribe(
      () => {
        this.toast.success('Cliente cadastrado com sucesso', 'Sucesso');
        this.router.navigate(['clienteList']);
      },
      (ex) => {
        console.log(ex);
        if (ex.error.errors) {
          ex.error.errors.forEach((element: any) => {
            this.toast.error('Opss, algo está errado!', element.message);
          });
        } else {
          this.toast.error('Opss, o CPF é inválido!', ex.error.message);
        }
      }
    );
  }

  validaCampos(): boolean {
    return (
      this.nomeComp.valid &&
      this.cpf.valid &&
      this.cnh.valid &&
      this.email.valid
    );
  }
}
