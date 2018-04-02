import { TestBed, inject } from '@angular/core/testing';

import { UnitsService } from './units.service';

describe('UnitsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnitsService]
    });
  });

  it('should be created', inject([UnitsService], (unitService: UnitsService) => {
    expect(unitService).toBeTruthy();
  }));

  it('should return an array of units', inject([UnitsService], (unitService: UnitsService) => {
    expect(typeof unitService.getAllUnits()).toBe('object');
    expect(unitService.getAllUnits().length).toBe(4);

    expect(typeof unitService.getCalcUnits()).toBe('object');
    expect(unitService.getCalcUnits().length).toBe(3);
  
  }));
});
