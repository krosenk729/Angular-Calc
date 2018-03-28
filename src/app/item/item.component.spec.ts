import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { ItemComponent } from './item.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('ItemComponent', () => {

  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;


  // Async because templates must be compiled
  // before compileComponents run
  beforeEach(async()=>{
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ItemComponent]
    }).compileComponents();
  });

  // Initialize value of declared fixture, component variables
  beforeEach(()=>{
    // create testing version of ItemComponent
    // and get instance of component
    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;

    // detect changes since data will change in component over time 
    fixture.detectChanges();

    debugElement = fixture.debugElement.query(By.css('.card-footer > div'));
    htmlElement = debugElement.nativeElement;
  });

  it('should display the calculated price per qty', ()=>{
    expect(htmlElement.textContent).toContain('$0.00 per 1 g');
  });

  it('should calculated price as converted between units and qty', ()=>{
    const foundPrice = component.findNewPrice('lbs', 'oz', 1, 16, 1);;
    expect(foundPrice).toEqual(1);
  });

});
