import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {forkJoin, Observable} from 'rxjs';
import {catchError} from 'rxjs/internal/operators';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class ApiService {

    private _url = 'http://localhost/cnepho_sarl_cms/public/api/category';
    public pageTitle: string;

    constructor(private http: HttpClient) {
    }

    setPageTitle(title: string) {
        this.pageTitle = title;
    }

    getPageTitle() {
        return this.pageTitle;
    }

    getAllCategory(): Observable<Category[]> {
        return this.http.get<Category[]>(this._url);
    }

    storeCategory(category): Observable<Category> {
        return this.http.post<Category>(this._url, category, httpOptions).pipe();
    }

    editCategory(id): Observable<Category> {
        const url = `${this._url}/${id}/edit`;

        return this.http.get<Category>(url);
    }

    updateCategory(category): Observable<Category> {
        const url = `${this._url}/${category.id}`;
        return this.http.patch<Category>(url, category, httpOptions).pipe();
    }

    deleteCategory1(category): Observable<Category> {
        return this.http.delete<Category>(this._url, category, httpOptions).pipe();
    }

    deleteCategory(id: number): Observable<{}> {
        const url = `${this._url}/${id}`;
        return this.http.delete(url, httpOptions).pipe();
    }
}

export interface Category {
    meta: any;
    status_code: number;
    id: number;
    name_ar: string;
    name_en: string;
    description_ar: string;
    description_en: string;
    // status_code: any;
}

