import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Endereco } from 'src/app/models/Endereco';
import { EnderecoService } from 'src/app/services/endereco.service';

@Component({
  selector: 'app-endereco-delete',
  templateUrl: './endereco-delete.component.html',
  styleUrls: ['./endereco-delete.component.css']
})
export class DeletarEnderecoComponent implements OnInit {

  endereco: Endereco = {
    id:             '',
    endereco:       '',
    cep:            '',
    numResidencia:  '',
    complemento:    '',
    cidade:         '',
    uf:             '',
    cliente:        '',
  }

  constructor(
    private service: EnderecoService,
    private toast:    ToastrService,
    private router:          Router,
    private route:   ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.endereco.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void {
    this.service.findById(this.endereco.id).subscribe(resposta => {
      this.endereco = resposta;
    })
  }

  delete(): void {
    this.service.delete(this.endereco.id).subscribe(() => {
      this.toast.success('Endereço deletado com sucesso', 'Delete');
      this.router.navigate(['clienteList'])
    }, ex => {
      if(ex.error.errors) {
        ex.error.errors.forEach(element => {
          this.toast.error(element.message);
        });
      } else {
        this.toast.error(ex.error.message);
      }
    })
  }

}
