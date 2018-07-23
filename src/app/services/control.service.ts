import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class ControlService {

    constructor(private router: Router) {
    }

    canActivate() {
        const token = localStorage.getItem('token');
        if (token) {
            return true;
        } else {
            this.router.navigateByUrl('/login');
            return false;
        }
    }
}
