import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'

export class Usuario{
  public _id: string;
  public name: string;
  public pass: number;
}

@Injectable()
export class UsuariosService {

  constructor(private http: HttpClient) { }

  listarTodos(){
    return this.http.get('http://localhost:3000/usuarios')
  }
  public salvar(dados: Usuario) {
    // Receita já existente
    console.log(dados)
    if(dados._id) {
      return this.http.post('http://localhost:3000/usuarios/', dados)
    }
    // Recurso novo
    else {
      return this.http.put('http://localhost:3000/usuarios/', dados)
    }
  }
  public obterPorId(id: string) {
    return this.http.get('http://localhost:3000/usuarios/' + id)
  }

  public excluir(id: string) {
    return this.http.delete('http://localhost:3000/usuarios/' + id)  
  }

}
