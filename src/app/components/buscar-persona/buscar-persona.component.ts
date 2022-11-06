import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PersonaService } from '../../services/persona.service';


@Component({
  selector: 'app-buscar-persona',
  templateUrl: './buscar-persona.component.html',
  styleUrls: ['./buscar-persona.component.css']
})
export class BuscarPersonaComponent implements OnInit {

  termino: string = "";



  constructor( private personsaService: PersonaService) { }

  buscar() {
    /* console.log(this.termino);
    this.personsaService.buscarPersona(this.termino)
      .subscribe( respuesta => {
        console.log(respuesta);
      }); */
  }

  ngOnInit() {
    
  }

  
}
