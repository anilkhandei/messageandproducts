import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _httpClient:HttpClient) { }
  public getProducts():any{
    return this._httpClient.get('https://www.w3schools.com/angular/customers.php');
  }
}
