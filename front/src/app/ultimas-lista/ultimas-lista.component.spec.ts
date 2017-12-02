import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimasListaComponent } from './ultimas-lista.component';

describe('UltimasListaComponent', () => {
  let component: UltimasListaComponent;
  let fixture: ComponentFixture<UltimasListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UltimasListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UltimasListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
