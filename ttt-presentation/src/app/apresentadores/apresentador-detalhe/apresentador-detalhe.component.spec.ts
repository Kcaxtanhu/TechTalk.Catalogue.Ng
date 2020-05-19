import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApresentadorDetalheComponent } from './apresentador-detalhe.component';

describe('ApresentadorDetalheComponent', () => {
  let component: ApresentadorDetalheComponent;
  let fixture: ComponentFixture<ApresentadorDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApresentadorDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApresentadorDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
