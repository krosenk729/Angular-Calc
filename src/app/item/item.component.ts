import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
	selector: 'app-item',
	templateUrl: './item.component.html',
	styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
	units: object[] = [
		{'value': 'g', 'name': 'grams (g)', 'default': true},
		{'value': 'oz', 'name': 'ounces (oz)'},
		{'value': 'each', 'name': 'units (items)'},
		{'value': 'lbs', 'name': 'pounds (lbs)'}
	];
	name: string;
	price: number = 0;
	sizeqty: number = 1;
	unit: string = 'g';
	constructor() {
	}

	ngOnInit() {
	}

}
