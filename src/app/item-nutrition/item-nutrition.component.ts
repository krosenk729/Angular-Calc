import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { UnitsService } from '../shared/units.service';
import { ConversionService } from '../shared/conversion.service';

@Component({
	selector: 'app-item-nutrition',
	templateUrl: './item-nutrition.component.html'
})
export class ItemNutritionComponent implements OnInit {
	@Input() calcUnit: string;
	@Input() itemNo: string;

	name: string;
	cals: number = 100;
	fat: number = 8;
	protein: number = 20;
	carbs: number = 20;
	serving: number = 40;
	unit: string = 'g';
	calcCals: number;
	calcFat: number;
	calcCarbs: number;
	calcProtein: number;
	units: any[];

	constructor(
		private convert: ConversionService,
		private unitService: UnitsService
		) {}

	ngOnInit(){
		this.units = this.unitService.getAllUnits();
		this.handleNewCalc();
	}
	
	handleNewCalc(){
		this.calcCals = this.convert.convertValue(this.unit, this.serving, this.cals, this.calcUnit);
		this.calcFat = this.convert.convertValue(this.unit, this.serving, this.fat, this.calcUnit);
		this.calcCarbs = this.convert.convertValue(this.unit, this.serving, this.carbs, this.calcUnit);
		this.calcProtein = this.convert.convertValue(this.unit, this.serving, this.protein, this.calcUnit);
	}

}