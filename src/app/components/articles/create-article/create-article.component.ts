import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../../../services/api.service';
import {Data} from '../../../data';

@Component({
    selector: 'app-create-article',
    templateUrl: './create-article.component.html',
    styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {
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

        const article = {
            name_ar: this.name_ar,
            name_en: this.name_en,
            description_ar: this.description_ar,
            description_en: this.description_en,
        };
        this.api.storeCategory(article).subscribe(
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
