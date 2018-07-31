import { Component, OnInit } from '@angular/core';
import {ProductService, ProductResponse} from "../../../services/product.service";

interface ProductObject {
  id: number;
  name: string;
  detail: string;
  created_at: string;
  updated_at: string;
}

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  public products= [];
  showForm: boolean;
  public product: ProductObject;

  id: number;
  name: string;
  detail: string;
  created_at: string;
  updated_at: string;

  constructor(public api:ProductService) { }

  ngOnInit() {
    this.showAllProducts();
  }

  showAllProducts() {
    this.api.getAll().subscribe(
        (data: ProductResponse) => {
          if (data.status_code === 200) {
            this.products = data.meta;
          } else{
            console.log(data.status_code);
          }
        }
    );
  }

  deleteProduct(product) {
    const index = this.products.indexOf(product);
    this.products.splice(index, 1);
    this.api.deleteProduct(product.id).subscribe(
        (data: ProductResponse) => {
          if (data.status_code === 200) {
            // alertify.success('Category Deleted Successfully');
          } else {
            // alertify.error('Error');
          }
        }
    );
  }

}
