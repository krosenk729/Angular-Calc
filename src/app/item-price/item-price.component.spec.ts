import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ItemPriceComponent } from './item-price.component';
import { UnitsService } from '../shared/units.service';
import { ConversionService } from '../shared/conversion.service';

describe('ItemComponent', () => {

  let component: ItemPriceComponent;
  let fixture: ComponentFixture<ItemPriceComponent>;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;


  // Async because templates must be compiled
  // before compileComponents run
  beforeEach(async()=>{
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ItemPriceComponent],
      providers: [UnitsService, ConversionService]
    }).compileComponents();
  });

  // Initialize value of declared fixture, component variables
  beforeEach(()=>{
    // create testing version of ItemPriceComponent
    // and get instance of component
    fixture = TestBed.createComponent(ItemPriceComponent);
    component = fixture.componentInstance;

    // detect changes since data will change in component over time 
    fixture.detectChanges();

    debugElement = fixture.debugElement.query(By.css('.card-footer .styled'));
    htmlElement = debugElement.nativeElement;
  });

  it('should display the calculated price per qty', ()=>{
    expect(htmlElement.textContent).toContain('1.00');
  });

  it('should update caluclated price as component values update', ()=>{
    const firstPrice = component.calcPrice;
    component.price *= 2;
    component.handleNewCalc();
    const secondPrice = component.calcPrice;
    expect(firstPrice).toBeLessThan(secondPrice);
  });

});
