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
	}

	newUnit(unit){
		this.calcUnit = unit;
		console.log('app component', unit);
	}

	newType(type){
		this.calcType = type;
		console.log('app component', type);
	}
}
