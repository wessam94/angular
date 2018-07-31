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
import { CreateUserComponent } from './components/user/create-user/create-user.component';
import { UpdateUserComponent } from './components/user/update-user/update-user.component';
import { ViewUserComponent } from './components/user/view-user/view-user.component';
import { CreateProductComponent } from './components/product/create-product/create-product.component';
import { UpdateProductComponent } from './components/product/update-product/update-product.component';
import { ViewProductComponent } from './components/product/view-product/view-product.component';

import {ProductService} from './services/product.service';

const routes: Routes = [


    // {
    //     path: 'category',
    //     component: IndexCategoryComponent,
    //     data: {
    //         breadcrumb: 'forms'
    //     },
    //     children: [
    //         {
    //             path: 'product',
    //             component: ViewProductComponent,
    //             data: {
    //                 breadcrumb: 'details'
    //             },
    //         },
    //     ]
    // },


    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'category', component: IndexCategoryComponent},
    {path: 'create_category', component: CreateCategoryComponent ,canActivate: [ControlService]},
    {path: 'update_category/:id', component: UpdateCategoryComponent ,canActivate: [ControlService]},
    {path: 'article', component: IndexArticleComponent},
    {path: 'create_article', component: CreateArticleComponent ,canActivate: [ControlService]},
    {path: 'update_article/:id', component: UpdateArticleComponent },

    //Products section
    {path: 'product', component: ViewProductComponent},
    {path: 'create_product', component: CreateProductComponent},
    {path: 'update_product/:id', component: UpdateProductComponent},

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
        UpdateArticleComponent,
        CreateUserComponent,
        UpdateUserComponent,
        ViewUserComponent,
        CreateProductComponent,
        UpdateProductComponent,
        ViewProductComponent
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
        ArticleService,
        ProductService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    // uplad file

}
