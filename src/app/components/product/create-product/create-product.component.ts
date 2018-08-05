import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../../services/product.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-create-product',
    templateUrl: './create-product.component.html',
    styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

    name: string;
    detail: string;

    constructor(public api: ProductService, private router: Router) {
    }

    ngOnInit() {
    }

    addProduct() {

        const product = {
            name: this.name,
            detail: this.detail,
        };
        this.api.CreateCategoryAPI(product).subscribe(
            (data) => {
                if (data.status_code === 200) {
                    // alertify.success('Category Saved Successfully');
                    this.router.navigate(['/product']);
                } else {
                    for (const entry of data.meta) {
                        // alertify.error(entry);
                    }
                }
            }
        );
    }


}
