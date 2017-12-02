import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ultimas-lista',
  templateUrl: './ultimas-lista.component.html',
  styleUrls: ['./ultimas-lista.component.css']
})
export class UltimasListaComponent implements OnInit {

  private titulo = 'Ultimas Adicionadas'
  private ultimas
  
  constructor(private http: HttpClient) { 
    this.http.get('http://localhost:3000/ultimas')
      .subscribe(dados => this.ultimas = dados)
  }

  ngOnInit() {
    
  }

}
