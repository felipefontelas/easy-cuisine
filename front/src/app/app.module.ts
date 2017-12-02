import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { RoutingModule } from './app.routes'
import { AppComponent } from './app.component'
import { ReceitasListaComponent } from './receitas-lista/receitas-lista.component'
import { UsuariosListaComponent } from './usuarios-lista/usuarios-lista.component'
import { UltimasListaComponent } from './ultimas-lista/ultimas-lista.component'
import { TodasListaComponent } from './todas-lista/todas-lista.component';
import { ReceitasFormComponent } from './receitas-form/receitas-form.component'
import { UsuariosFormComponent } from './usuarios-form/usuarios-form.component'
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    ReceitasListaComponent,
    UsuariosListaComponent,
    UltimasListaComponent,
    TodasListaComponent,
    ReceitasFormComponent,
    UsuariosFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
