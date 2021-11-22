import { Component, OnInit } from '@angular/core';
import { Credencial } from 'src/app/models/Credencial';
import { FormControl, Validators } from '@angular/forms';


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

  constructor() {}

  ngOnInit(): void {}

  logar() {
    window.location.href = 'homeCrud';
  }
}
