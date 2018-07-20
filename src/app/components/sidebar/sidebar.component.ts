import {Component, OnInit} from '@angular/core';

import {UserService} from '../../services/user.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

    links = [];

    constructor(public userService: UserService) {
        this.links = [
            {link: 'article', icon: 'home', title: 'Article'},
            {link: 'category', icon: 'home', title: 'Category'},
            {link: 'login', icon: 'home', title: 'Login'},
            {link: 'product', icon: 'home', title: 'Product'},
            {link: 'role', icon: 'home', title: 'Role'}
        ];


    }

    ngOnInit() {
    }

}
