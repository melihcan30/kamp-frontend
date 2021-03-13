import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { ListResposeModel } from '../models/listResponseModel';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = "https://localhost:44314/api/products/getall"

  constructor(private httpClient:HttpClient) { }

  getProducts():Observable<ListResposeModel<Product>>{
    return this.httpClient.get<ListResposeModel<Product>>(this.apiUrl);
  }
}
