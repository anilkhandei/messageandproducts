import { Component, OnInit } from '@angular/core';
import {MessageService} from '../services/message.service';
import {ProductsService} from '../services/products.service';
import {forkJoin} from 'rxjs';

@Component({
  selector: 'app-messageandproducts',
  templateUrl: './messageandproducts.component.html',
  styleUrls: ['./messageandproducts.component.css']
})
export class MessageandproductsComponent implements OnInit {
  messageData:any;
  productsData:any;
  constructor(private _mService:MessageService,private _pService:ProductsService) { }

  ngOnInit() {
    forkJoin([this._mService.getMessage(),this._pService.getProducts()])
    .subscribe(response=>{
      this.messageData=response[0];
      this.productsData=response[1];
    })
  }
  
 
}
