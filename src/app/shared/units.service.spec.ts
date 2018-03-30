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
    expect(typeof unitService.getAllUnits).toBe('array');
    expect(unitService.getAllUnits.length).toBe(5);

    expect(typeof unitService.getCalcUnits).toBe('array');
    expect(unitService.getCalcUnits.length).toBe(4);
  
  }));
});
