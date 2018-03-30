import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	calcType: string;
	calcUnit: string;

	constructor() {
		this.calcType = 'price';
		this.calcUnit = 'g'
	}

	newUnit(unit){
		this.calcType = unit;
		console.log('app component', unit);
	}

	newType(type){
		this.calcType = type;
		console.log('app component', type);
	}
}
