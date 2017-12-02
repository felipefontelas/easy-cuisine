import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { ReceitasService, Receita } from '../services/receitas.service'

@Component({
  selector: 'app-receitas-form',
  templateUrl: './receitas-form.component.html',
  styleUrls: ['./receitas-form.component.css'],
  providers: [ReceitasService]
})
export class ReceitasFormComponent implements OnInit {


  private title = 'Nova receita'
  private model : Receita = new Receita();
  private id: string
  

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private rs: ReceitasService) { }

  ngOnInit() {

    this.model = new Receita()
    this.model.taste = "";
    this.model.difficulty = "";

    this.route.params.subscribe(
      // Se existir um parâmetro id, significa que queremos editar
      // um objeto já existente
      params => {
        if(params['id']) {
          this.id = params['id'];
          // Buscamos o objeto para edição
          this.rs.obterPorId(this.id).subscribe(
            // O model com que iremos trabalhar não é mais um objeto vazio,
            // mas um objeto existente retornado pelo back-end
            (existente: Receita) => this.model = existente
          )
        }
      }
    )


  }

  enviar(){
    //preservando o roteador
    let roteador = this.router
    this.rs.salvar(this.model).subscribe(
      function(){
        roteador.navigate(['/receitas'])
      },
      function(erro){
        console.error(erro)
      }
    )
  }

}
