import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApresentadoresComponent } from './apresentadores.component';

describe('ApresentadoresComponent', () => {
  let component: ApresentadoresComponent;
  let fixture: ComponentFixture<ApresentadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApresentadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApresentadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
