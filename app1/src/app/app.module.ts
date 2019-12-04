import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProuctListComponent } from './prouct-list/prouct-list.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductService } from './product.service';


@NgModule({
  declarations: [
    AppComponent,
    ProuctListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
