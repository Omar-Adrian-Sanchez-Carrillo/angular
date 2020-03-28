import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaconsultaComponent } from './listaconsulta.component';

describe('ListaconsultaComponent', () => {
  let component: ListaconsultaComponent;
  let fixture: ComponentFixture<ListaconsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaconsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaconsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
