import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-editar-cosas',
  templateUrl: './agregar-editar-cosas.component.html',
  styleUrls: ['./agregar-editar-cosas.component.css']
})
export class AgregarEditarCosasComponent implements OnInit {
  loading: boolean =false;
  form: FormGroup

  constructor(private fb: FormBuilder) {
    this.form= this.fb.group({
      detalle: ['', Validators.required],
      categoria: ['', Validators.required],
      
      
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




