import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

export interface ProductResponse {
  status_code: number;
  meta: any;
}

interface ProductObj {
  id: number;
  name: string;
  detail: string;
  created_at: string;
  updated_at: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _url = 'http://localhost/cnephoLaravel/public/api/product';
  private _showUrl = 'http://localhost/cnephoLaravel/public/api/product/show';
  private _createUrl = 'http://localhost/cnephoLaravel/public/api/product/store';
  private _updateUrl = 'http://localhost/cnephoLaravel/public/api/product/update';
  private _deleteUrl = 'http://localhost/cnephoLaravel/public/api/product/delete';

  constructor(private http: HttpClient) { }

  getAll(): Observable<ProductResponse> {
    return this.http.get<ProductResponse>(this._url);
  }

  getSingle(product): Observable<ProductResponse> {
    return this.http.post<ProductResponse>(this._showUrl, product, httpOptions).pipe();
  }

  CreateCategoryAPI(product): Observable<ProductResponse> {
    return this.http.post<ProductResponse>(this._createUrl, product, httpOptions).pipe();
  }

  deleteProduct(id: number): Observable<{}> {
    return this.http.post(this._deleteUrl, null,httpOptions).pipe();
  }

  updateProduct(product): Observable<ProductResponse> {
    return this.http.post<ProductResponse>(this._updateUrl, product, httpOptions).pipe();
  }

}
