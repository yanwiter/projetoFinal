import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sobre-nos',
  templateUrl: './sobre-nos.component.html',
  styleUrls: ['./sobre-nos.component.css'],
})
export class SobreNosComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
}
