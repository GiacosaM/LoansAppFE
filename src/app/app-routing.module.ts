import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { ListadoCosasPrestadasComponent } from './components/listado-cosas-prestadas/listado-cosas-prestadas.component';
import { AgregarEditarPrestamoComponent } from './components/agregar-editar-prestamo/agregar-editar-prestamo.component';
import { ComponentFixture } from '@angular/core/testing';
import { VerPrestamoComponent } from './components/ver-prestamo/ver-prestamo.component';

const routes: Routes = [
  { path: 'listadoPrestamos', component: ListadoCosasPrestadasComponent},
  { path: 'agregarPrestamo', component: AgregarEditarPrestamoComponent},
  { path: 'verPrestamo/:id', component: VerPrestamoComponent},
  { path: 'editarPrestamo/:id', component: AgregarEditarPrestamoComponent},
  { path: '', redirectTo: 'listadoPrestamos', pathMatch: 'full'},
  { path: '**', redirectTo: 'listadoPrestamos', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
