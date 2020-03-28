import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergeComponent } from './emerge.component';

describe('EmergeComponent', () => {
  let component: EmergeComponent;
  let fixture: ComponentFixture<EmergeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmergeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
