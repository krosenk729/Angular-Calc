import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleComponent } from './double.component';

describe('DoubleComponent', () => {
  let component: DoubleComponent;
  let fixture: ComponentFixture<DoubleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoubleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
