import { TestBed, inject } from '@angular/core/testing';

import { ConversionService } from './conversion.service';

describe('ConversionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConversionService]
    });
  });

  it('should be created', inject([ConversionService], (service: ConversionService) => {
    expect(service).toBeTruthy();
  }));


  it('should be able to find conversion factors between units', inject([ConversionService], (service: ConversionService) => {
    
    expect(service.getConversion('oz', 'lbs')).toEqual(1/16);
    expect(service.getConversion('oz', 'oz')).toEqual(1);
    expect(service.getConversion('oz', 'g')).toBeGreaterThan(0.03);
    expect(service.getConversion('oz', 'g')).toBeLessThan(0.04);

    expect(service.getConversion('lbs', 'oz')).toEqual(16);
    expect(service.getConversion('lbs', 'lbs')).toEqual(1);
    expect(service.getConversion('oz', 'g')).toBeGreaterThan(453.5);
    expect(service.getConversion('oz', 'g')).toBeLessThan(453.6);


    expect(service.getConversion('g', 'oz')).toBeGreaterThan(0.035);
    expect(service.getConversion('g', 'oz')).toBeLessThan(0.04);
    expect(service.getConversion('g', 'lbs')).toBeGreaterThan(0.0022);
    expect(service.getConversion('g', 'lbs')).toBeLessThan(0.0023);
    expect(service.getConversion('g', 'g')).toEqual(1);

  }));
});


  it('should be able to convert between units', inject([ConversionService], (service: ConversionService) => {
    // 16 oz should be 1 lbd
    expect(service.convertValue('oz', 16, 1, 'lbd')).toEqual(1);
    expect(service.convertValue('oz', 32, 1, 'lbd')).toEqual(2);
    expect(service.convertValue('oz', 16, 2, 'lbd')).toEqual(2);
    // 1 lbd should be 16 oz
    expect(service.convertValue('lbd', 16, 1, 'oz')).toEqual(1);
    expect(service.convertValue('lbd', 16, 2, 'oz')).toEqual(2);
  }));
});
