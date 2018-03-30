import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { UnitsService } from '../shared/units.service';

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html'
})
export class NavigationComponent implements OnInit {
	@Output('newUnit') newUnit = new EventEmitter<string>();
	@Output('newType') newType = new EventEmitter<string>();
	calcUnit: string;
	calcType: string;
	units: any[];	

	constructor(private unitService: UnitsService) {
	}

	ngOnInit() {
		this.units = this.unitService.getAllUnits();
		this.calcType = 'price';
		this.calcUnit = 'g';
	}

	emitNewUnit(event){
		this.newUnit.emit(this.calcUnit);
		console.log('nav component', this.calcUnit);
	}
	
	emitNewType(event){
		this.newType.emit(this.calcType);
		console.log('nav component', this.calcType);
	}
	
}
