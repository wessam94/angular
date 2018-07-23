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
    title_ar: string;
    title_en: string;
    text_ar: string;
    text_en: string;

    constructor(public api: ApiService, private router: Router) {
    }

    ngOnInit() {
    }

    addArticle() {

        const category = {
            title_ar: this.title_ar,
            title_en: this.title_en,
            text_ar: this.text_ar,
            text_en: this.text_en,
        };
        this.api.storeCategory(category).subscribe(
            (data: any) => {

                if (data.status_code === 200) {
                    this.title_ar = '';
                    this.title_en = '';
                    this.text_ar = '';
                    this.text_en = '';
                    // alertify.success('Article Saved Successfully');
                    this.router.navigate(['/article']);
                } else {
                    for (const entry of data.message) {
                        // alertify.error(entry);
                    }
                }
            }
        );
    }
}
