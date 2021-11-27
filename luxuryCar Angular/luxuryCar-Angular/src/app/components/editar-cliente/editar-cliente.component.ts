
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/Cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css'],
})
export class EditarClienteComponent implements OnInit {
  id: any;
  cliente: Cliente = new Cliente();
  constructor(
    private clienteService: ClienteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {}

  buscarCliente(cpf: string){

  }

  // buscar(){
  //   this.id = this.route.snapshot.params['id'];
  //   this.clienteService.findById(this.id).subscribe(
  //     (data) => {
  //       this.cliente = data;
  //     }, error => console.log(error));
  // }

  salvar(id: any) {
    this.clienteService.update(this.id, this.cliente).subscribe(
      (data) => {
        this.clienteList();
      },
      (error) => console.log(error)
    );
  }
  clienteList() {
    this.router.navigate(['/clientes']);
  }
}
