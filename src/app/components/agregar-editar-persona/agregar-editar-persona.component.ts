import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-editar-persona',
  templateUrl: './agregar-editar-persona.component.html',
  styleUrls: ['./agregar-editar-persona.component.css']
})
export class AgregarEditarPersonaComponent implements OnInit {
  
  loading: boolean =false;
  form: FormGroup
  
  

  constructor(private fb: FormBuilder) {
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

  agregarPrestamo() {
    console.log("Agregando persona")
  }

}




