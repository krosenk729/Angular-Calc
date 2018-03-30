import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemNutritionComponent } from './item-nutrition.component';

describe('ItemNutritionComponent', () => {
  let component: ItemNutritionComponent;
  let fixture: ComponentFixture<ItemNutritionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemNutritionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemNutritionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
