import { Component } from '@angular/core';
import { IProduct } from './product.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'ab-product-details',
  imports:[CurrencyPipe],
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
      discount: 0.2
    }
  }
}
