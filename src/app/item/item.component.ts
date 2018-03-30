import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
	selector: 'app-item',
	templateUrl: './item.component.html',
	styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
	name: string;

	constructor() { }

	ngOnInit() {
	}
}