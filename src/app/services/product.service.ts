import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListsResponseModel } from '../models/ListResponseModel';
import { Product } from '../models/product';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'https://localhost:44334/api/';

  //

  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<ListsResponseModel<Product>> {
    let newPath = this.apiUrl + 'products/getall';
    return this.httpClient.get<ListsResponseModel<Product>>(newPath);
  }

  getProductsByCategory(
    categoryId: number
  ): Observable<ListsResponseModel<Product>> {
    let newPath =
      this.apiUrl + 'products/getbycategory?categoryId=' + categoryId;
    return this.httpClient.get<ListsResponseModel<Product>>(newPath);
  }

  add(product: Product):Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'products/add', product,);
  }
}
