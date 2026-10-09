import { Component, signal } from '@angular/core';
import { IProduct } from './product.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'ab-product-details',
  imports: [CurrencyPipe],
  styleUrl: './product-details.component.css',
  templateUrl: './product-details.component.html',
})
export class ProductDetailsComponent {
  product: IProduct;
  availableInventory = signal(3);
  isButtonDisabled = signal(false);

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
    //this.availableInventory.set(2) //will update value explicitly to 2
    //this.availableInventory.update((p) => this.availableInventory() - 1) //will update interface explicitly to 2 every time
    //setTimeout(() => this.availableInventory.update((p) => p - 1), 2000); //will update availableInventory by -1 each time
    setTimeout(() => this.updateInventory(product), 1000); //check to only allow decrement to 0
    var msg = product.name + " added to cart " + new Date().toLocaleTimeString();
    console.log(msg);
    product.message = "added to cart";

  }

  updateInventory(product: IProduct) {
    this.availableInventory.update((p) => p - 1 >= 0 ? p - 1 : 0);

    if (this.availableInventory() == 0)
      this.isButtonDisabled.set(true);
    
    console.log(this.availableInventory());
  }
}
