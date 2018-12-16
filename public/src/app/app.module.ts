import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { DetailsComponent } from './products/details/details.component';
import { NewComponent } from './products/new/new.component';
import { UpdateComponent } from './products/update/update.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { ProductsService } from './products.service'

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    DetailsComponent,
    NewComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})

export class AppModule { }