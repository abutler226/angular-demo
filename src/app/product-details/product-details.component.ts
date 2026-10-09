import { Component, signal, input } from '@angular/core';
import { IProduct } from './product.model';
import { CurrencyPipe, NgClass } from '@angular/common';

@Component({
  selector: 'ab-product-details',
  imports: [CurrencyPipe, NgClass],
  styleUrl: './product-details.component.css',
  templateUrl: './product-details.component.html',
})
export class ProductDetailsComponent {
  product = input.required<IProduct>();
  availableInventory = signal(3);
  isButtonDisabled = signal(false);
  message = "";

  getImageURL(product: IProduct) {
    return '/images/robot-parts/' + product.imageName;
  }

  addToCart(product: IProduct, event: MouseEvent) {
    //this.availableInventory.set(2) //will update value explicitly to 2
    //this.availableInventory.update((p) => this.availableInventory() - 1) //will update interface explicitly to 2 every time
    //setTimeout(() => this.availableInventory.update((p) => p - 1), 2000); //will update availableInventory by -1 each time
    setTimeout(() => this.updateInventory(product), 100); //check to only allow decrement to 0
    var msg = product.name + " added to cart " + new Date().toLocaleTimeString();
    console.log(msg);
  }

  updateInventory(product: IProduct) {
    this.availableInventory.update((p) => p - 1 >= 0 ? p - 1 : 0);

    if (this.availableInventory() == 0)
      this.isButtonDisabled.set(true);

    console.log(this.availableInventory());
  }

  getPriceClasses() {
    return { 'strikethrough': this.product().discount > 0, 'full-price': this.product().discount == 0 };
  }
}
