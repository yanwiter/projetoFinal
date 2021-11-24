import { BodyCrudComponent } from './../body-crud/body-crud.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs/internal/observable/from';

@Component({
  selector: 'app-navbar-crud',
  templateUrl: './navbar-crud.component.html',
  styleUrls: ['./navbar-crud.component.css'],
})
export class NavbarCrudComponent implements OnInit {
  bodyCrudComponent = new BodyCrudComponent();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  metodoAbrir(): void {
    this.bodyCrudComponent.clickMenu('teste');
    from(this.router.navigate(['body']));
  }
}
