import { Injectable } from '@angular/core';

@Injectable()
export class ConversionService {

	constructor() { }

	getConversion(
		startUnit: string, 
		endUnit: string
		): number{
		let conversionFactor = 1;
		switch (startUnit) {
			case 'g':
				if(endUnit == 'oz') conversionFactor = 0.03527396
				if(endUnit == 'lbs') conversionFactor = 0.00220462
				break;
			case 'oz':
				if(endUnit == 'g') conversionFactor = 28.35
				if(endUnit == 'lbs') conversionFactor = 0.0625
				break;
			case 'lbs':
				if(endUnit == 'oz') conversionFactor = 16
				if(endUnit == 'g') conversionFactor = 453.59237
				break;
		}
		return conversionFactor;
	}

	convertValue(
		startUnit: string, 
		startQty: number, 
		startValue: number, 
		endUnit: string, 
		endQty: number = 1
		): number{
			const conversionFactor = this.getConversion(startUnit, endUnit);
			return startValue / startQty * endQty * conversionFactor;
	}

}
