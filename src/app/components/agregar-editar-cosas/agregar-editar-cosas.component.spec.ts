import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarCosasComponent } from './agregar-editar-cosas.component';

describe('AgregarEditarCosasComponent', () => {
  let component: AgregarEditarCosasComponent;
  let fixture: ComponentFixture<AgregarEditarCosasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarEditarCosasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarEditarCosasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
