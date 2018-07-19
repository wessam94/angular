import {Component, OnInit} from '@angular/core';
import {LoginComponent} from '../../login/login.component';
import {UpdateCategoryComponent} from '../categories/update-category/update-category.component';
import {Routes} from '@angular/router';
import {IndexCategoryComponent} from '../categories/index-category/index-category.component';
import {CreateCategoryComponent} from '../categories/create-category/create-category.component';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

    links = [];

    constructor() {
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
