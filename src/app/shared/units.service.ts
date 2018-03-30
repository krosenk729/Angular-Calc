import { Injectable } from '@angular/core';

@Injectable()
export class UnitsService {
	units: any[] = [{
		'value': 'g', 
		'name': 'grams (g)',
	},
	{
		'value': 'oz', 
		'name': 'ounces (oz)'
	},
	{
		'value': 'each', 
		'name': 'units (items)'
	},
	{
		'value': 'lbs', 
		'name': 'pounds (lbs)'
	}];

	constructor() { }

	getAllUnits(){
		return this.units;
	}

	getCalcUnits(){
		return this.units.filter(u => u.value !== 'each');
	}

}
