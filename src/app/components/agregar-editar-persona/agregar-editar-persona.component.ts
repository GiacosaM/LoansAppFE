import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from 'src/app/interfaces/persona';
import { PersonaService } from '../../services/persona.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-editar-persona',
  templateUrl: './agregar-editar-persona.component.html',
  styleUrls: ['./agregar-editar-persona.component.css']
})
export class AgregarEditarPersonaComponent implements OnInit {
  
  loading: boolean =false;
  form: FormGroup
  
  

  constructor(private fb: FormBuilder, 
    private _PersonaService: PersonaService,
    private _snackBar: MatSnackBar,
    private router: Router ) {

    this.form= this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      mail: ['', Validators.required],
      telefono: ['', Validators.required],
      
    })
  }



  ngOnInit(): void {
  }

  campoEsValido( campo: string) {
    return this.form.get(campo)?.invalid
    && this.form.get(campo)?.touched
  }

  agregarPersona() {
    const persona: Persona = {
      name: this.form.value.nombre,
      lastname: this.form.value.apellido,
      email: this.form.value.mail,
      telefono: this.form.value.telefono
    }

    this._PersonaService.addPersona(persona).subscribe(data => {

      this._PersonaService.mensajeExito('La Persona Fue agregada Exitosamente');
      this.router.navigate(['/listadoPersona']);
    })
  }

  

}




