import {Component, OnInit, Output, Input, EventEmitter} from '@angular/core';
import {from} from 'rxjs';
import {ApiService, Category} from '../../../services/api.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-update-category',
    templateUrl: './update-category.component.html',
    styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {
    id: number;
    name_ar: string;
    name_en: string;
    description_ar: string;
    description_en: string;

    category: Category;
    status_code: any;
    @Output() messageEvent = new EventEmitter<string>();

    constructor(private api: ApiService, private router: Router) {
    }

    ngOnInit() {
        this.editCategory();
    }


    editCategory() {
        const id = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
        this.api.editCategory(id).subscribe((data: any) => {
                console.log(data.meta);
                if (data.status_code === 200) {
                    this.category = data.meta;
                    this.name_ar = data.meta.name_ar;
                    this.id = data.meta.id;
                    this.name_en = data.meta.name_en;
                    this.description_ar = data.meta.description_ar;
                    this.description_en = data.meta.description_en;
                } else {
                    this.status_code = data.status_code;
                }
            }
        );
    }

    updateCategory() {
        const category = {
            name_ar: this.name_ar,
            name_en: this.name_en,
            description_ar: this.description_ar,
            description_en: this.description_en,
            id: this.id,
        };
        this.api.updateCategory(category).subscribe(
            (data: any) => {
                if (data.status_code === 200) {
                    this.name_ar = '';
                    this.name_en = '';
                    this.description_ar = '';
                    this.description_en = '';
                    // alertify.success('Category Updated Successfully');
                    this.router.navigate(['/category']);

                } else {
                    for (const entry of data.meta) {
                        // alertify.error(entry);
                    }
                }
            }
        );
    }
}
