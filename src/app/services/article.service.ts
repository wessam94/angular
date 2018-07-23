import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()

export class ArticleService {

    private _url = 'http://localhost/cnephoLaravel/public/api/article';

    constructor(private http: HttpClient) {
    }

    getAllArticles(): Observable<Article[]> {
        return this.http.get<Article[]>(this._url);
    }

    storeArticle(article): Observable<Article> {
        return this.http.post<Article>(this._url, article, httpOptions).pipe();
    }

    editArticle(id): Observable<Article> {
        const url = `${this._url}/${id}/edit`;

        return this.http.get<Article>(url);
    }

    updateArticle(article): Observable<Article> {
        const url = `${this._url}/${article.id}`;
        return this.http.patch<Article>(url, article, httpOptions).pipe();
    }


    deleteArticle(id: number): Observable<{}> {
        const url = `${this._url}/${id}`;
        return this.http.delete(url, httpOptions).pipe();
    }
}

export interface Article {
    meta: any;
    id: number;
    title_ar: string;
    title_en: string;
    text_ar: string;
    text_en: string;
    status_code: any;
}
