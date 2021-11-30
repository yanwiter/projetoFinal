import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
  }

  sobreNos() {
    window.location.href = 'sobreNos';
  }
  marcasDisponiveis() {
    window.location.href = 'marcasDisponiveis';
  }
  contateNos() {
    window.location.href = 'contato';
  }

  login() {
    window.location.href = 'login';
  }
}
