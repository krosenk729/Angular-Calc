import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
	calcUnit: string = 'g';
	currPage: string = 'price';
	units = [{
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
	}];	

	constructor(private router: Router, private route: ActivatedRoute) {
	}

	newNav(){
		this.router.navigate([this.currPage, this.calcUnit]);
	}

	newPage(newPage){
		this.currPage = newPage;
	}

	ngOnInit() {
	}

}
