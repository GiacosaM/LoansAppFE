import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-editar-prestamo',
  templateUrl: './agregar-editar-prestamo.component.html',
  styleUrls: ['./agregar-editar-prestamo.component.css']
})
export class AgregarEditarPrestamoComponent implements OnInit {
  loading: boolean =false;
  form: FormGroup
  

  constructor(private fb: FormBuilder) {
    this.form= this.fb.group({
      objeto: ['', Validators.required],
      categoria: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
    })
  }



  ngOnInit(): void {
  }

  agregarPrestamo() {
    console.log("Agregando prestamos")
  }

}
