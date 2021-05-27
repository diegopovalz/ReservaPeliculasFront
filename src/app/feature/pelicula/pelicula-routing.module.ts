import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearPeliculaComponent } from './components/crear-pelicula/crear-pelicula.component';
import { ListaPeliculasComponent } from './components/lista-peliculas/lista-peliculas.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';

const routes: Routes = [
  {
    path: '',
    component: PeliculasComponent,
    children: [
      {
        path: 'listar',
        component: ListaPeliculasComponent
      },
      {
        path: 'crear',
        component: CrearPeliculaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeliculaRoutingModule { }
