import {Component} from '@angular/core';
import {ApiService} from './services/api.service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public page_title: any;

    constructor(public api: ApiService) {
        this.page_title = this.api.getPageTitle();
    }

    sendMessage1() {
        return '222222222222222';
    }

    setTitleBread() {
        return '222222222222222';
    }

    getFromChildEvent($event) {
        console.log('aaaaaaaaaaaaaaa');
        return this.page_title = $event;
    }
}
