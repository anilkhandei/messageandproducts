import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private _httpClient:HttpClient) { }

  public getMessage():any{
    return this._httpClient.get('http://test-routes.herokuapp.com/test/hello');
  }
}
