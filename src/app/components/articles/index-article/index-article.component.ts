import {Component, OnInit} from '@angular/core';
import {ApiService, Category} from '../../../services/api.service';
import {Article, ArticleService} from '../../../services/article.service';

@Component({
    selector: 'app-index-article',
    templateUrl: './index-article.component.html',
    styleUrls: ['./index-article.component.css']
})
export class IndexArticleComponent implements OnInit {

    public articles = [];
    public status_code = '';
    showForm: boolean;
    public category: Article;


    id: number;
    name_ar: string;
    name_en: string;
    description_ar: string;
    description_en: string;


    constructor(public articleService: ArticleService) {
    }

    ngOnInit() {
        this.showForm = false;
        this.showArticles();
    }

    showArticles() {
        this.articleService.getAllArticles().subscribe(data => {
                if (data.status_code === 200) {
                    this.articles = data.meta;
                } else {
                    this.status_code = data.status_code;
                }
            }
        );
    }

    deleteArticle(article) {
        const index = this.articles.indexOf(article);
        this.articles.splice(index, 1);
        this.articleService.deleteArticle(article.id).subscribe(data => {
                // console.log(data);
                if (data.status_code === 200) {
                    alertify.success('Article Deleted Successfully');
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
