import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MessageandproductsComponent } from './messageandproducts/messageandproducts.component';
import {HttpClientModule} from '@angular/common/http';
import {MessageService} from '../../src/app/services/message.service';
import {ProductsService} from '../../src/app/services/products.service';

@NgModule({
  declarations: [
    AppComponent,
    MessageandproductsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [MessageService,ProductsService],
  bootstrap: [MessageandproductsComponent]
})
export class AppModule { }
