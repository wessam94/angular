import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../user';
import {Category} from './api.service';
import {HttpParams} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    visible: boolean;

    private oauthUrl = 'http://server.techalin.com/oauth/token';
    private usersUrl = 'http://server.techalin.com/api/users';
    private _login_url = `http://localhost/cnephoLaravel/public/api/auth/login`;

    constructor(private http: HttpClient) {
        this.visible = true;
    }

    hide() {
        this.visible = false;
    }

    show() {
        this.visible = true;
    }

    toggle() {
        this.visible = !this.visible;
    }


    loginAccessToken(email, password, remember_me) {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        headers = headers.append('Accept', 'application/json');
        // let params = new HttpParams().set('email', email);
        // params = params.append('password', password);

        return this.http.post<any[]>(this._login_url, {
            headers: headers, params: JSON.stringify({
                'email': email,
                'password': password,
                'remember_me': remember_me
            })
        });
    }

    // getAccessToken(email, password, remember_me) {
    //     let headers = new HttpHeaders().set('Authorization', 'Bearer ' + token); // create header object
    //     headers = headers.append('header2', hvalue2); // add a new header, creating a new object
    //     let params = new HttpParams().set('param1', value1); // create params object
    //     params = params.append('param2', value2); // add a new param, creating a new object
    //     return this.http.post<any[]>(this._login_url, {headers: headers, params: params});
    // }


    // getUsers(accessToken: string): Observable<User[]> {
    //
    //     // var headers = new Headers({
    //     //     'Accept': 'application/json',
    //     //     'Authorization': 'Bearer ' + accessToken,
    //     // });
    //     //
    //     // return this.http.get(this.usersUrl, {
    //     //     headers: headers
    //     // })
    //     //     .map((res: Response) => res.json())
    //     //     .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    // }
}

