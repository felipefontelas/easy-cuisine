import { Component, OnInit } from '@angular/core';

import { ReceitasService } from '../services/receitas.service';

@Component({
  selector: 'app-receitas-lista',
  templateUrl: './receitas-lista.component.html',
  styleUrls: ['./receitas-lista.component.css'],
  providers: [ReceitasService]
})
export class ReceitasListaComponent implements OnInit {

  private titulo = 'Lista de receitas'
  private receitas : any;
  
  constructor(private service: ReceitasService) { 
    
  }

  ngOnInit() {
    this.atualizarLista()
    
  }
  atualizarLista(){
    this.service.listarTodos().subscribe(dados => this.receitas = dados)
  }
  excluir(id: string) {
    if(confirm('Deseja realmente excluir este receita?')) {
      this.service.excluir(id).subscribe(
        () => this.atualizarLista(),
        erro => console.error(erro)
      )
    }

  }
  
}
