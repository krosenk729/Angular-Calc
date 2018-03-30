import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ItemComponent } from './item/item.component';
import { ItemNutritionComponent } from './item-nutrition/item-nutrition.component';
import { ItemPriceComponent } from './item-price/item-price.component';

import { UnitsService } from './shared/units.service';
import { ConversionService } from './shared/conversion.service';

// const appRoutes: Routes = [
//   {path: 'price/:unit', component: ItemPriceComponent},
//   {path: 'nutrition/:unit', component: ItemNutritionComponent},
//   {path: '**', redirectTo: 'price/g'}
// ];


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ItemComponent,
    ItemPriceComponent,
    ItemNutritionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    // RouterModule.forRoot(appRoutes)
  ],
  providers: [UnitsService, ConversionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
