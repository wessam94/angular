import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
    @Output() PageTitle = new EventEmitter<string>();

    constructor() {
        this.sendPageTitle('rtjnhgoerngkme');
    }

    @Input() page_title3: string;
    
    ngOnInit() {
    }

    sendPageTitle(title) {
        this.PageTitle.emit(title);
    }
}
