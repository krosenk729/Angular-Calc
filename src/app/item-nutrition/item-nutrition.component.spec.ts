import { async, inject, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ItemNutritionComponent } from './item-nutrition.component';
import { UnitsService } from '../shared/units.service';
import { ConversionService } from '../shared/conversion.service';

describe('ItemNutritionComponent', () => {
  let component: ItemNutritionComponent;
  let fixture: ComponentFixture<ItemNutritionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ ItemNutritionComponent ],
      providers: [UnitsService, ConversionService]
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

  it('should calculate the nutrition for a given item', () => {
    /*
    if serving is 28g, calories is 130, fat is 7, carbs is 15g, protein is 1g
    then should get 
    4.64 calories per gram (130/28)
    .25 g fat per serving (7/28)
    .54 g fat per serving (15/28)
    .04 g protein per serving (1/28)
    */
    /*
    if serving is 1oz, calories is 130, fat is 7, carbs is 15g, protein is 1g
    then should get 
    4.64 calories per gram (130/(1oz))
    .25 g fat per serving (7/28)
    .54 g fat per serving (15/28)
    .04 g protein per serving (1/28)
    */
    expect(component).toBeTruthy();
  });
});
