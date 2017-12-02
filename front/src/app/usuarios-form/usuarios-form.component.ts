import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { UsuariosService, Usuario } from '../services/usuarios.service'

@Component({
  selector: 'app-usuarios-form',
  templateUrl: './usuarios-form.component.html',
  styleUrls: ['./usuarios-form.component.css'],
  providers: [UsuariosService]
})
export class UsuariosFormComponent implements OnInit {

  private title = 'Novo usuario'
  private model : Usuario = new Usuario();
  private id: string

  constructor( 
    private router: Router,
    private route: ActivatedRoute,
    private us: UsuariosService) { }

  ngOnInit() {

    this.model = new Usuario()

    this.route.params.subscribe(
      // Se existir um parâmetro id, significa que queremos editar
      // um objeto já existente
      params => {
        if(params['id']) {
          this.id = params['id'];
          // Buscamos o objeto para edição
          this.us.obterPorId(this.id).subscribe(
            // O model com que iremos trabalhar não é mais um objeto vazio,
            // mas um objeto existente retornado pelo back-end
            (existente: Usuario) => this.model = existente
          )
        }
      }
    )
  }
  enviar(){
    //preservando o roteador
    let roteador = this.router
    this.us.salvar(this.model).subscribe(
      function(){
        roteador.navigate(['/usuarios'])
      },
      function(erro){
        console.error(erro)
      }
    )
  }

}
