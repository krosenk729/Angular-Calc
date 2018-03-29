import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ItemPriceComponent } from './item-price/item-price.component';
import { ItemNutritionComponent } from './item-nutrition/item-nutrition.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SingleComponent } from './single/single.component';
import { DoubleComponent } from './double/double.component';


const appRoutes: Routes = [
  {path: 'single', component: SingleComponent},
  {path: 'double', component: DoubleComponent},
  {path: '**', redirectTo: 'single'}
];


@NgModule({
  declarations: [
    AppComponent,
    ItemPriceComponent,
    NavigationComponent,
    SingleComponent,
    DoubleComponent,
    ItemNutritionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
