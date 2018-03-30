import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { UnitsService } from '../shared/units.service';
import { ConversionService } from '../shared/conversion.service';

@Component({
	selector: 'app-item-price',
	templateUrl: './item-price.component.html'
})
export class ItemPriceComponent implements OnInit {
	@Input() calcUnit: string;

	name: string;
	price: number = 0;
	qty: number = 1;
	unit: string = 'g';
	calcPrice: number;
	units: any[];

	constructor(
		private convert: ConversionService,
		private unitService: UnitsService
		) {}

	ngOnInit(){
		this.units = this.unitService.getAllUnits();
		this.handleNewCalc();
		console.log('item-price', this.calcUnit);
	}

	handleNewCalc(){
		this.calcPrice = this.convert.convertValue(this.unit, this.qty, this.price, this.calcUnit);
	}

}
