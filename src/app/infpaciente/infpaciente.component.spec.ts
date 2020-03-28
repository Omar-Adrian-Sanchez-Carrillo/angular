import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfpacienteComponent } from './infpaciente.component';

describe('InfpacienteComponent', () => {
  let component: InfpacienteComponent;
  let fixture: ComponentFixture<InfpacienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfpacienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfpacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
