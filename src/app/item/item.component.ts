import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
	selector: 'app-item',
	templateUrl: './item.component.html'
})
export class ItemComponent implements OnInit {
	@Input() calcUnit: string;
	@Input() calcType: string;
	@Input() itemNo: string;
	name: string;

	constructor() {
	}

	ngOnInit() {
		console.log('item-component unit', this.calcUnit);
		console.log('item-component type', this.calcType);
	}
}