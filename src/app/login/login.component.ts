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

    constructor(private userService: UserService, private router: Router) {
    }

    ngOnInit() {
    }

    setToken() {

        // localStorage.setItem('token', 'token');
    }

    onSubmit() {
        this.userService.loginAccessToken(this.form.email, this.form.password, this.form.remember_me).subscribe(data => {
                console.log(data.message);
                if (data.status_code === 200) {
                    alertify.success('Login Successfully');
                    this.router.navigate(['/category']);
                    localStorage.setItem('token', 'token');
                }
                if (data.status_code === 400) {
                    for (const entry of data.message) {
                        alertify.error(entry);
                    }
                }
                if (data.status_code === 401) {
                    alertify.error(data.message);
                }

            }
        );
    }

}
