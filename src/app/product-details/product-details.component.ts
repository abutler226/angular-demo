import { Component } from '@angular/core';
import { IProduct } from './product.model';
import { CurrencyPipe } from '@angular/common';
import { timestamp } from 'rxjs';

@Component({
  selector: 'ab-product-details',
  imports: [CurrencyPipe],
  styleUrl: './product-details.component.css',
  templateUrl: './product-details.component.html',
})
export class ProductDetailsComponent {
  product: IProduct;

  constructor() {
    this.product = {
      id: 2,
      description: "A friendly bot",
      name: "Friendly Bot",
      imageName: "head-friendly.png",
      category: "Heads",
      price: 945.10,
      discount: 0.2,
      message: ''
    }
  }

  getImageURLbyProduct(product: IProduct) {
    return '/images/robot-parts/' + product.imageName;
  }
  getImageURL() {
    return '/images/robot-parts/' + this.product.imageName;
  }
  addToCart(product: IProduct, event: MouseEvent) {
    var msg=" (added to cart: " + new Date().toLocaleTimeString() + ")";
    console.log(msg);
    product.message = msg;
  }
}
