import {Component, Input, Output, OnInit} from '@angular/core';
import {ApiService, Category} from '../../../services/api.service';
import {EventEmitter} from '@angular/core';
import {Data} from '../../../data';

@Component({
    selector: 'app-index-category',
    templateUrl: './index-category.component.html',
    styleUrls: ['./index-category.component.css']
})
export class IndexCategoryComponent implements OnInit {


    public categories = [];
    showForm: boolean;
    public category: Category;
    status_code: any;

    id: number;
    name_ar: string;
    name_en: string;
    description_ar: string;
    description_en: string;


    constructor(public api: ApiService) {
        this.api.setPageTitle('aaaaaaaaaaaaaaa');


    }

    ngOnInit() {
        this.showForm = false;
        this.showCategory();
    }

    showCategory() {
        this.api.getAllCategory().subscribe((data: any) => {
                if (data.status_code === 200) {
                    this.categories = data.data;
                } else {
                }
            }
        );
    }

    deleteCategory(category) {
        const index = this.categories.indexOf(category);
        this.categories.splice(index, 1);
        this.api.deleteCategory(category.id).subscribe((data: any) => {
                // console.log(data);
                if (data.status_code === 200) {
                    // alertify.success('Category Deleted Successfully');
                } else {
                    // alertify.error('Error');
                }
            }
        );
    }

    updateShowForm() {
        this.showForm = !this.showForm;
    }


}
