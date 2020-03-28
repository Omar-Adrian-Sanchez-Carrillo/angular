import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoconsultaComponent } from './contenidoconsulta.component';

describe('ContenidoconsultaComponent', () => {
  let component: ContenidoconsultaComponent;
  let fixture: ComponentFixture<ContenidoconsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenidoconsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenidoconsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
