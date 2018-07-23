import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public form = {
        email: null,
        password: null,
        remember_me: false
    };
    login = true;

    constructor(public userService: UserService, private router: Router) {
        this.userService.hide();
        console.log(this.userService.visible);
    }

    ngOnInit() {
    }

    setToken() {

        // localStorage.setItem('token', 'token');
    }

    onSubmit() {

        this.userService.loginAccessToken(this.form.email, this.form.password, this.form.remember_me).subscribe((data: any) => {
                if (data.status_code === 200) {
                    // alertify.success('Login Successfully');
                    localStorage.setItem('token', 'token');
                    this.router.navigate(['/category']);
                    this.userService.show();
                }
                if (data.status_code === 400) {
                    for (const entry of data.message) {
                        // alertify.error(entry);
                    }
                }
                if (data.status_code === 401) {
                    // alertify.error(data.message);
                }

            }
        );
    }

}
