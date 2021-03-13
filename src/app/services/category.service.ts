import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { ListsResponseModel } from '../models/ListResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl = 'https://localhost:44334/api/categories/getall';

  constructor(private httpClient: HttpClient) { }

  getCategories(): Observable<ListsResponseModel<Category>> {
    return this.httpClient.get<ListsResponseModel<Category>>(this.apiUrl);
  }

}
