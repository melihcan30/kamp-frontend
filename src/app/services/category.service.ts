import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { ListResposeModel } from '../models/listResponseModel';
import { Category } from '../models/category';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl = "https://localhost:44314/api/categories/getall"

  constructor(private httpClient:HttpClient) { }

  getCategories():Observable<ListResposeModel<Category>>{
    return this.httpClient.get<ListResposeModel<Category>>(this.apiUrl);
  }
}
