import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './component/product-list/product-list.component';

import { FilterPipe } from './appPipes/filter.pipe';
import { AddToCartComponent } from './component/add-to-cart/add-to-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    FilterPipe,
    AddToCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
