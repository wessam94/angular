import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../services/api.service';
import {Router} from '@angular/router';
import {Data} from '../../../data';

@Component({
    selector: 'app-create-category',
    templateUrl: './create-category.component.html',
    styleUrls: ['./create-category.component.css']
})

export class CreateCategoryComponent implements OnInit {

    id: number;
    name_ar: string;
    name_en: string;
    description_ar: string;
    description_en: string;

    constructor(public api: ApiService, private router: Router) {
    }

    ngOnInit() {
    }


    addCategory() {

        const category = {
            name_ar: this.name_ar,
            name_en: this.name_en,
            description_ar: this.description_ar,
            description_en: this.description_en,
        };
        this.api.storeCategory(category).subscribe(
            (data: any) => {
                if (data.status_code === 200) {
                    this.name_ar = '';
                    this.name_en = '';
                    this.description_ar = '';
                    this.description_en = '';
                    // alertify.success('Category Saved Successfully');
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
