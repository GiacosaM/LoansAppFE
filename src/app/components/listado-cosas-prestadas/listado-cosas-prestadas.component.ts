import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Prestamo } from '../../interfaces/prestamo';



const listPrestamos: Prestamo[] = [
  {nombre: 'Martin', apellido: 'Giacosa', cosa: 'Martillo', categoria:'Herramientas', fechaPrestamo: '21/10/2022', fechaDevolucion: '',devuelto: false},
  {nombre: 'Jorge', apellido: 'Castagnola', cosa: 'CD Jose luis Perales', categoria:'Musica', fechaPrestamo: '18/02/2018', fechaDevolucion: '25/09/2021',devuelto: true},
  {nombre: 'Hernan', apellido: 'Surin', cosa: 'Destornillador', categoria:'Herramientas', fechaPrestamo: '01/05/2022', fechaDevolucion: '',devuelto: false},
  {nombre: 'Carlos', apellido: 'Guerin', cosa: 'Remera', categoria:'Ropa', fechaPrestamo: '11/10/2022', fechaDevolucion: '29/10/20202',devuelto: true},
  {nombre: 'Guillermo', apellido: 'Garrido', cosa: 'Prolongador', categoria:'Herramientas', fechaPrestamo: '21/10/2022', fechaDevolucion: '25/10/2022',devuelto: true},
  {nombre: 'Leonardo', apellido: 'Barone', cosa: 'Luces Led', categoria:'Varios', fechaPrestamo: '21/10/2022', fechaDevolucion: '',devuelto: false},

];

@Component({
  selector: 'app-listado-cosas-prestadas',
  templateUrl: './listado-cosas-prestadas.component.html',
  styleUrls: ['./listado-cosas-prestadas.component.css']
})
export class ListadoCosasPrestadasComponent implements OnInit, AfterViewInit  {

  displayedColumns: string[] = ['fechaPrestamo','cosa', 'categoria','apellido','nombre','acciones'  ];
  dataSource = new MatTableDataSource<Prestamo>(listPrestamos);
  loading: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel = 'Cant. por Pagina'
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  eliminarPrestamo(mensaje: string) {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
      this._snackBar.open(mensaje, '', {
        duration: 2000,
        horizontalPosition: 'right',
      });
    }, 3000);

    
  }

}
