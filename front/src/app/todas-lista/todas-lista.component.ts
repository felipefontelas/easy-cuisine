import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todas-lista',
  templateUrl: './todas-lista.component.html',
  styleUrls: ['./todas-lista.component.css']
})
export class TodasListaComponent implements OnInit {

  private titulo = 'Lista de todas as receitas'
  private todas
  
  constructor(private http: HttpClient) { 
    this.http.get('http://localhost:3000/todas')
      .subscribe(dados => this.todas = dados)
  }

  ngOnInit() {
    
  }

}
