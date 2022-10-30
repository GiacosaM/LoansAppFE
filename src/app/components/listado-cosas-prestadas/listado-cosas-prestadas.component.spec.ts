import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoCosasPrestadasComponent } from './listado-cosas-prestadas.component';

describe('ListadoCosasPrestadasComponent', () => {
  let component: ListadoCosasPrestadasComponent;
  let fixture: ComponentFixture<ListadoCosasPrestadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoCosasPrestadasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoCosasPrestadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
