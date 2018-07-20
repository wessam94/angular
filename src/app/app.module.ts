import {BrowserModule, Title} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {FooterComponent} from './components/footer/footer.component';

import {ApiService} from './services/api.service';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';

import {IndexCategoryComponent} from './components/categories/index-category/index-category.component';
import {CreateCategoryComponent} from './components/categories/create-category/create-category.component';
import {UpdateCategoryComponent} from './components/categories/update-category/update-category.component';
import {ControlService} from './services/control.service';
import {BreadcrumbComponent} from './components/breadcrumb/breadcrumb.component';
import {UserService} from './services/user.service';
import {CreateArticleComponent} from './components/articles/create-article/create-article.component';
import {IndexArticleComponent} from './components/articles/index-article/index-article.component';
import {UpdateArticleComponent} from './components/articles/update-article/update-article.component';
import {ArticleService} from './services/article.service';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'category', component: IndexCategoryComponent, canActivate: [ControlService]},
    {path: 'create_category', component: CreateCategoryComponent},
    {path: 'update_category/:id', component: UpdateCategoryComponent},
    {path: 'article', component: IndexArticleComponent, canActivate: [ControlService]},
    {path: 'create_article', component: CreateArticleComponent},
    {path: 'update_article/:id', component: UpdateArticleComponent},
];

@NgModule({
    declarations: [
        AppComponent,
        SidebarComponent,
        FooterComponent,
        LoginComponent,
        RegisterComponent,
        IndexCategoryComponent,
        CreateCategoryComponent,
        UpdateCategoryComponent,
        BreadcrumbComponent,
        CreateArticleComponent,
        IndexArticleComponent,
        UpdateArticleComponent
    ],
    imports: [
        BrowserModule,
        // import HttpClientModule after BrowserModule.
        HttpClientModule,
        FormsModule,
        RouterModule.forRoot(routes),


    ],
    providers: [
        ApiService,
        Title,
        ControlService,
        UserService,
        ArticleService

    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
