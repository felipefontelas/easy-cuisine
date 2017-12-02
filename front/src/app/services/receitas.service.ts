import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

//classe que representa o model no Front-end
export class Receita{
  public _id: string;
  public name: string;
  public difficulty: string;
  public taste: string;
  public prepare: string;
  public ingredients: string;
}

@Injectable()
export class ReceitasService {

  constructor(private http: HttpClient) { }

  public listarTodos(){
    return this.http.get('http://localhost:3000/receitas');
  }

  public salvar(dados: Receita) {
    // Receita já existente
    console.log(dados)
    if(dados._id) {
      return this.http.post('http://localhost:3000/receitas/', dados)
    }
    // Recurso novo
    else {
      return this.http.put('http://localhost:3000/receitas/', dados)
    }
  }

  public obterPorId(id: string) {
    return this.http.get('http://localhost:3000/receitas/' + id)
  }

  public excluir(id: string) {
    return this.http.delete('http://localhost:3000/receitas/' + id)  
  }
}
