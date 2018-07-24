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

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _url = 'http://localhost/cnephoLaravel/public/api/product';

  constructor(private http: HttpClient) { }

  getAll(): Observable<ProductResponse> {
    return this.http.get<ProductResponse>(this._url);
  }

}
