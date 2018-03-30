import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-item-price',
	templateUrl: './item-price.component.html',
	styleUrls: ['./item-price.component.css']
})
export class ItemPriceComponent implements OnInit {
	name: string;
	price: number = 0;
	qty: number = 1;
	unit: string = 'g';
	calcUnit: string;
	calcPrice: number;
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
		this.calcPrice = this.price / this.qty * cf;
	}

}
