import { Component, OnInit } from '@angular/core';

import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-usuarios-lista',
  templateUrl: './usuarios-lista.component.html',
  styleUrls: ['./usuarios-lista.component.css'],
  providers: [UsuariosService]

})
export class UsuariosListaComponent implements OnInit {

  private titulo = 'Lista de usuarios'
  private usuarios : any;
  
  constructor(private service: UsuariosService) { 
    
  }

  ngOnInit() {
    this.atualizarLista()

    
  }
  atualizarLista(){
    this.service.listarTodos().subscribe(dados => this.usuarios = dados)
    }
    excluir(id: string) {
      if(confirm('Deseja realmente excluir este usuario?')) {
        this.service.excluir(id).subscribe(
          () => this.atualizarLista(),
          erro => console.error(erro)
        )
      }

    }

}
