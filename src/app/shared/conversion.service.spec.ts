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
    expect(service.getConversion('oz', 'g')).toBeGreaterThan(28.3);
    expect(service.getConversion('oz', 'g')).toBeLessThan(28.4);

    expect(service.getConversion('lbs', 'oz')).toEqual(16);
    expect(service.getConversion('lbs', 'lbs')).toEqual(1);
    expect(service.getConversion('lbs', 'g')).toBeGreaterThan(453.5);
    expect(service.getConversion('lbs', 'g')).toBeLessThan(453.6);

    expect(service.getConversion('g', 'oz')).toBeGreaterThan(0.035);
    expect(service.getConversion('g', 'oz')).toBeLessThan(0.04);
    expect(service.getConversion('g', 'lbs')).toBeGreaterThan(0.0022);
    expect(service.getConversion('g', 'lbs')).toBeLessThan(0.0023);
    expect(service.getConversion('g', 'g')).toEqual(1);

  }));

  it('should be able to convert between units', inject([ConversionService], (service: ConversionService) => {
    // oz to lbg
    expect(service.convertValue('oz', 16, 1, 'lbd')).toEqual(1);
    expect(service.convertValue('oz', 32, 1, 'lbd')).toEqual(2);
    expect(service.convertValue('oz', 16, 2, 'lbd')).toEqual(2);

   /* // lbd to oz
    expect(service.convertValue('lbd', 1, 1, 'oz')).toEqual(16);
    expect(service.convertValue('lbd', .5, .5, 'oz')).toEqual(8);
    expect(service.convertValue('lbd', 2, 1, 'oz')).toEqual(32);
    expect(service.convertValue('lbd', 1, 2, 'oz')).toEqual(32);

    // g to lbd 
    expect(service.convertValue('g', 100, 1, 'lbd')).toBeGreaterThan(0.2);
    expect(service.convertValue('g', 100, 1, 'lbd')).toBeLessThan(0.3);

    // lbd to g
    expect(service.convertValue('lbd', .05, 1, 'g')).toBeGreaterThan(22);
    expect(service.convertValue('lbd', .05, 1, 'g')).toBeLessThan(23);
    
    // oz to g
    expect(service.convertValue('g', 100, 1, 'oz')).toBeGreaterThan(3.5);
    expect(service.convertValue('g', 100, 1, 'oz')).toBeLessThan(3.6);

    // oz to g
    expect(service.convertValue('oz', 1, 1, 'g')).toBeGreaterThan(28.3);
    expect(service.convertValue('oz', 1, 1, 'g')).toBeLessThan(28.4);
    */
  }));
});
