import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-item-nutrition',
	templateUrl: './item-nutrition.component.html',
	styleUrls: ['./item-nutrition.component.css']
})
export class ItemNutritionComponent implements OnInit {
	name: string;
	cals: number = 0;
	serving: number = 40;
	unit: string = 'g';
	calcUnit: string;
	calcCals: number;
	units = [{
		'value': 'g', 
		'name': 'grams (g)'
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

	constructor(private route: ActivatedRoute) {}

	ngOnInit(){
		this.route.params.subscribe(params => {
			this.calcUnit = params['unit'];

			this.handleNewCalc();
		});
	}

	getConversion(startUnit, endUnit){
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

	handleNewCalc(){
		const cf = this.getConversion(this.unit, this.calcUnit);
		this.calcCals = this.cals / this.serving * cf;
	}

}