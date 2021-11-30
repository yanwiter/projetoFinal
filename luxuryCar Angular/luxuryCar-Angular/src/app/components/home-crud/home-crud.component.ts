import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home-crud',
  templateUrl: './home-crud.component.html',
  styleUrls: ['./home-crud.component.css'],
})
export class HomeCrudComponent implements OnInit {
  constructor(private toast: ToastrService) {}

  ngOnInit(): void {
    this.toast.info('Seja muito bem-vinda(o)!', 'Olá,');
  }
}
