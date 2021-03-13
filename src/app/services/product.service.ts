import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListsResponseModel } from '../models/ListResponseModel';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'https://localhost:44334/api/products/getall';

  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<ListsResponseModel<Product>> {
    return this.httpClient.get<ListsResponseModel<Product>>(this.apiUrl);
  }
}
