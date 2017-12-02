import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitasListaComponent } from './receitas-lista.component';

describe('ReceitasListaComponent', () => {
  let component: ReceitasListaComponent;
  let fixture: ComponentFixture<ReceitasListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceitasListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceitasListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
