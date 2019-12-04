import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url='http://192.168.43.81:7008/product'

  constructor(private http:HttpClient) { }

  getProducts(){
    console.log("dats")
    return this.http.get(this.url)
  }
}
