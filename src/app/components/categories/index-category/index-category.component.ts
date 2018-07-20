import {Component, Input, Output, OnInit} from '@angular/core';
import {ApiService, Category} from '../../../services/api.service';
import {EventEmitter} from '@angular/core';

@Component({
    selector: 'app-index-category',
    templateUrl: './index-category.component.html',
    styleUrls: ['./index-category.component.css']
})
export class IndexCategoryComponent implements OnInit {


    public categories = [];
    public status_code = '';
    showForm: boolean;
    public category: Category;


    id: number;
    name_ar: string;
    name_en: string;
    description_ar: string;
    description_en: string;
    private alertify: any;


    constructor(public api: ApiService) {
        this.api.setPageTitle('aaaaaaaaaaaaaaa');
    }

    ngOnInit() {
        this.showForm = false;
        this.showCategory();
    }

    showCategory() {
        this.api.getAllCategory().subscribe(data => {
                if (data.status_code === 200) {
                    this.categories = data.meta;
                } else {
                    this.status_code = data.status_code;
                }
            }
        );
    }

    deleteCategory(category) {
        const index = this.categories.indexOf(category);
        this.categories.splice(index, 1);
        this.api.deleteCategory(category.id).subscribe(data => {
                // console.log(data);
                if (data.status_code === 200) {
                    alertify.success('Category Deleted Successfully');
                } else {
                    alertify.error('Error');
                }
            }
        );
    }

    updateShowForm() {
        this.showForm = !this.showForm;
    }


}
