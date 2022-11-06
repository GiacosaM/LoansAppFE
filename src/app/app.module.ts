import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Modulos
import { SharedModule } from './shared/shared.module';

//Componentes
import { AgregarEditarPersonaComponent } from './components/agregar-editar-persona/agregar-editar-persona.component';
import { AgregarEditarCosasComponent } from './components/agregar-editar-cosas/agregar-editar-cosas.component';
import { AgregarCategoriaComponent } from './components/agregar-categoria/agregar-categoria.component';
import { ListadoCosasPrestadasComponent } from './components/listado-cosas-prestadas/listado-cosas-prestadas.component';
import { VerPrestamoComponent } from './components/ver-prestamo/ver-prestamo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgregarEditarPrestamoComponent } from './components/agregar-editar-prestamo/agregar-editar-prestamo.component';
import { ListadoPersonasComponent } from './components/listado-personas/listado-personas.component';
import { BuscarPersonaComponent } from './components/buscar-persona/buscar-persona.component';
import { VerPersonaComponent } from './components/ver-persona/ver-persona.component';




@NgModule({
  declarations: [
    AppComponent,
    AgregarEditarPersonaComponent,
    AgregarEditarCosasComponent,
    AgregarCategoriaComponent,
    ListadoCosasPrestadasComponent,
    VerPrestamoComponent,
    AgregarEditarPrestamoComponent,
    ListadoPersonasComponent,
    BuscarPersonaComponent,
    VerPersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
