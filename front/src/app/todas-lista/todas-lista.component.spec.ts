import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodasListaComponent } from './todas-lista.component';

describe('TodasListaComponent', () => {
  let component: TodasListaComponent;
  let fixture: ComponentFixture<TodasListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodasListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodasListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
