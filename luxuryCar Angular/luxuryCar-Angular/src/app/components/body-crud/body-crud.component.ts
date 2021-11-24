import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs/internal/observable/from';

@Component({
  selector: 'app-body-crud',
  templateUrl: './body-crud.component.html',
  styleUrls: ['./body-crud.component.css']
})
export class BodyCrudComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isCadastrarVeiculo: boolean = false;

  clickMenu(param: String): void{

console.log("inicio do if");
    if (param == 'teste') {
      this.isCadastrarVeiculo = true;
      // from(this.router.navigate(['BodyCrudComponent']));
      console.log('fim do if');
    }
  }
}
