import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { ListResposeModel } from '../models/listResponseModel';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = "https://localhost:44314/api/";

  constructor(private httpClient:HttpClient) { }

  getProducts():Observable<ListResposeModel<Product>>{
    let newPath = this.apiUrl + "products/getall"
    return this.httpClient.get<ListResposeModel<Product>>(newPath);
  }

  getProductsByCategory(categoryId:number):Observable<ListResposeModel<Product>>{
    let newPath = this.apiUrl + "products/getbycategory?categoryId="
    return this.httpClient.get<ListResposeModel<Product>>(newPath);
  }
}
