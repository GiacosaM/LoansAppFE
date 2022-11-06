import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Prestamo } from '../../interfaces/prestamo';
import { Cosa } from '../../interfaces/cosa';
import { Idd } from '../../interfaces/pais.interface';
import { Categoria } from '../../interfaces/categoria';

@Component({
  selector: 'app-agregar-editar-prestamo',
  templateUrl: './agregar-editar-prestamo.component.html',
  styleUrls: ['./agregar-editar-prestamo.component.css']
})
export class AgregarEditarPrestamoComponent implements OnInit {
  loading: boolean =false;
  
  date: Date = new Date();

  


  myControl = new FormControl('');
 
  options: string[] = ['Martin Giacosa', 'Hernan Surin', 'Leonardo, Barone'];
  categorias: string[] = ['Herramientas', 'CD', 'Libros', 'DVD', 'Ropa']
  objetos: string [] = ['Martillo', 'Phil Collings Cd', 'Remera Rolling Stone']
  filteredOptions!: Observable<string[]>;
  

  form: FormGroup=this.fb.group({
    objeto: ['', Validators.required,],
    categoria: ['', Validators.required],
    nombre: ['', Validators.required],
    
  })

  constructor(private fb: FormBuilder) {}



  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  campoEsValido( campo: string) {
    return this.form.get(campo)?.invalid
    && this.form.get(campo)?.touched; 
  }

  agregarPrestamo() {
    
    const objecto = this.form.get('objeto')?.value;
    console.log(objecto);

    

  }

}
