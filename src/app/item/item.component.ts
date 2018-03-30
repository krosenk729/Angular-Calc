import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
	selector: 'app-item',
	templateUrl: './item.component.html'
})
export class ItemComponent implements OnInit {
	@Input() calcUnit: string;
	@Input() calcType: string;
	name: string;

	constructor() {
	}

	ngOnInit() {
		console.log('item-component', this.calcUnit);
		console.log('item-component', this.calcType);
	}
}