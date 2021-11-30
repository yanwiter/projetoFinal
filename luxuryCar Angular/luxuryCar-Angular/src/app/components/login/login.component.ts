import { Component, OnInit } from '@angular/core';
import { Credencial } from 'src/app/models/Credencial';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  credencial: Credencial = {
    email: '',
    senha: '',
  };

  constructor(private toast: ToastrService) {}

  ngOnInit(): void {}

  logar() {
    this.toast.info('Por gentileza realize seu login!', 'Olá,');
    window.location.href = 'homeCrud';
  }
}
