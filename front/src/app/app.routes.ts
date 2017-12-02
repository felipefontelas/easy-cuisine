import { Routes, RouterModule } from '@angular/router'
import { RouterOutlet } from '@angular/router'
import { ReceitasListaComponent } from './receitas-lista/receitas-lista.component'
import { UsuariosListaComponent } from './usuarios-lista/usuarios-lista.component'
import { UltimasListaComponent } from './ultimas-lista/ultimas-lista.component'
import { TodasListaComponent } from './todas-lista/todas-lista.component'
import { ReceitasFormComponent } from './receitas-form/receitas-form.component'
import { UsuariosFormComponent } from './usuarios-form/usuarios-form.component'

const routes : Routes = [

   // Rota raiz /
   {
      path: '',
      component: ReceitasListaComponent
   },

   // Rota /receitas
   {
      path: 'receitas',
      component: ReceitasListaComponent
   },
   {
      path: 'usuarios',
      component: UsuariosListaComponent
   },
   {
      path: 'usuarios/novo',
      component: UsuariosFormComponent
   },
   {
      path: 'ultimas',
      component: UltimasListaComponent
   },
   {
      path: 'todas',
      component: TodasListaComponent
   },
   {
       path: 'receitas/novo',
       component: ReceitasFormComponent
   },
   {
       path: 'receitas/:id',
       component: ReceitasFormComponent
   }

]

export const RoutingModule = RouterModule.forRoot(routes)