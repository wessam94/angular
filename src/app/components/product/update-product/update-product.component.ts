import { Component, OnInit } from '@angular/core';
import {ProductService, ProductResponse} from "../../../services/product.service";
import {Router} from "@angular/router";


interface ProductObject {
  id: number;
  name: string;
  detail: string;
  created_at: string;
  updated_at: string;
}

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  product: ProductObject;
  id: number;
  name: string;
  detail: string;

  constructor(private api: ProductService, private router: Router) { }

  ngOnInit() {
    this.getSingleProduct()
  }

  getSingleProduct() {
    const id = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
    const product = {
      product_id: id,
    };

    this.api.getSingle(product).subscribe(
        (data) => {
          if (data.status_code === 200) {
            this.product = data.meta;
            this.id = data.meta.id;
            this.name = data.meta.name;
            this.detail = data.meta.detail;
          } else {
            alert("response is "+data.status_code)
          }

        }
    );
  }


  editProduct() {
    const product = {
      product_id: this.id,
      name: this.name,
      detail: this.detail
    };
    this.api.updateProduct(product).subscribe(
        (data) => {
          if (data.status_code === 200) {
            // alertify.success('Category Updated Successfully');
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
