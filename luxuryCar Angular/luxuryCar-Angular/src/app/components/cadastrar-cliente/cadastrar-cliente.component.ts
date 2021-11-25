import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from '../../models/Cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cadastrar-cliente',
  templateUrl: './cadastrar-cliente.component.html',
  styleUrls: ['./cadastrar-cliente.component.css'],
})
export class CadastrarClienteComponent implements OnInit {
  Cliente: Cliente = {
    id: undefined,
    nomeComp: '',
    sexo: undefined,
    estCivil: undefined,
    nascimento: '',
    cpf: '',
    rg: '',
    tel: '',
    cnh: '',
    email: '',
    endereco: undefined,
  };

  nomeComp: FormControl = new FormControl(null, Validators.minLength(3));
  sexo: FormControl = new FormControl(null, Validators.required);
  estCivil: FormControl = new FormControl(null, Validators.required);
  nascimento: FormControl = new FormControl(null, Validators.required);
  cpf: FormControl = new FormControl(null, Validators.required);
  rg: FormControl = new FormControl(null, Validators.required);
  tel: FormControl = new FormControl(null, Validators.minLength(9));
  cnh: FormControl = new FormControl(null, Validators.required);
  email: FormControl = new FormControl(null, Validators.email);
  endereco: FormControl = new FormControl(null, Validators.required);

  constructor(
    /*private service: ClienteService,
    private toast: ToastrService,
    private router: Router*/
  ) {}

  ngOnInit(): void {}

  /*create(): void {
    this.service.create(this.Cliente).subscribe(
      () => {
        this.toast.success('Cliente cadastrado com sucesso', 'Cliente');
        this.router.navigate(['clientes']);
      },
      (ex) => {
        if (ex.error.errors) {
          ex.error.errors.forEach((element: any) => {
            this.toast.error(element.message);
          });
        } else {
          this.toast.error(ex.error.message);
        }
      }
    );
  }*/
}
