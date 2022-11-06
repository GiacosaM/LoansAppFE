import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { ListadoCosasPrestadasComponent } from './components/listado-cosas-prestadas/listado-cosas-prestadas.component';
import { AgregarEditarPrestamoComponent } from './components/agregar-editar-prestamo/agregar-editar-prestamo.component';
import { ComponentFixture } from '@angular/core/testing';
import { VerPrestamoComponent } from './components/ver-prestamo/ver-prestamo.component';
import { AgregarEditarPersonaComponent } from './components/agregar-editar-persona/agregar-editar-persona.component';
import { ListadoPersonasComponent } from './components/listado-personas/listado-personas.component';
import { BuscarPersonaComponent } from './components/buscar-persona/buscar-persona.component';
import { AgregarEditarCosasComponent } from './components/agregar-editar-cosas/agregar-editar-cosas.component';
import { VerPersonaComponent } from './components/ver-persona/ver-persona.component';

const routes: Routes = [
  { path: 'listadoPrestamos', component: ListadoCosasPrestadasComponent},
  { path: 'agregarPrestamo', component: AgregarEditarPrestamoComponent},
  { path: 'verPrestamo/:id', component: VerPrestamoComponent},
  { path: 'editarPrestamo/:id', component: AgregarEditarPrestamoComponent},

  { path: 'listadoPersona', component: ListadoPersonasComponent},
  { path: 'agregarPersona', component: AgregarEditarPersonaComponent},
  { path: 'buscarPersona', component: BuscarPersonaComponent},
  { path: 'editarPersona/:id', component: AgregarEditarPersonaComponent},
  { path: 'verPersona/:id', component: VerPersonaComponent},

  { path: 'agregarObjeto', component: AgregarEditarCosasComponent},

  { path: '', redirectTo: 'listadoPersona', pathMatch: 'full'},
  { path: '**', redirectTo: 'listadoPersona', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
