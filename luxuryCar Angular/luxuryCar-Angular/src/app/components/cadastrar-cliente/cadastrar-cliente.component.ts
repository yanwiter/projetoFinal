import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
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
    id:         '',
    nomeComp:   '',
    sexo:       '',
    estCivil:   '',
    nascimento: '',
    cpf:        '',
    rg:         '',
    telefone:   '',
    cnh:        '',
    email:      '',
    endereco:   ''
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
    private toast:    ToastrService,
    private router:          Router,
  ) {}

  ngOnInit(): void {}

  create(): void {
    this.service.create(this.cliente).subscribe(() => {
        this.toast.success('Cliente cadastrado com sucesso', 'Cadastro');
        this.router.navigate(['clienteList']);
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

      // liberarCadastrar(): boolean {
    //   return this.nomeComp.valid && this.cpf.valid 
    //    && this.cnh.valid && this.email.valid
    // }

  
}
