import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';

@Component({
	selector: 'app-item-price',
	templateUrl: './item-price.component.html',
	styleUrls: ['./item-price.component.css']
})
export class ItemPriceComponent {
	name: string;
	price: number;
	qty: number;
	unit: string;
	calcQty: number;
	calcPrice: number;
	calcUnit: string;
	units = [
		{
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
		}
	];

	constructor() {
		this.price = 0;
		this.qty = 1;
		this.unit = 'g';
		this.calcQty = this.qty;
		this.calcUnit = this.unit;
		this.calcPrice = this.price;
	}

	findNewPrice(endUnit, startUnit, price, qty, endqty = 1){
		console.log('finding new price');
		let conversionFactor = 1;
		switch (endUnit) {
			case 'g':
				if(startUnit == 'oz') conversionFactor = 0.03527396
				if(startUnit == 'lbs') conversionFactor = 0.00220462
				break;
			case 'oz':
				if(startUnit == 'g') conversionFactor = 28.35
				if(startUnit == 'lbs') conversionFactor = 0.0625
				break;
			case 'lbs':
				if(startUnit == 'oz') conversionFactor = 16
				if(startUnit == 'g') conversionFactor = 453.59237
				break;
		}
		return price * conversionFactor * endqty / qty;
	}

	handleNewCalc(){
		this.calcPrice = this.findNewPrice(this.calcUnit, this.unit, this.price, this.qty, this.calcQty);
	}

}
