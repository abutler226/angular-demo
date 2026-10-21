import { Component, signal, input } from '@angular/core';
import { IProduct } from './product.model';
import { CurrencyPipe, NgClass } from '@angular/common';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'ab-product-details',
  imports: [CurrencyPipe, NgClass],
  styleUrl: './product-details.component.css',
  templateUrl: './product-details.component.html',
})
export class ProductDetailsComponent {
  product = input.required<IProduct>();
  availableInventory = signal(5);
  isButtonDisabled = signal(false);
  message = "";

  constructor(private cartService: CartService) { }

  getImageURL(product: IProduct) {
    return '/images/robot-parts/' + product.imageName;
  }

  addToCart(product: IProduct, event: MouseEvent) {
    //this.availableInventory.update((p) => p - 1);
    this.updateInventory(product);
    this.cartService.addToCart(this.product());
  }

  updateInventory(product: IProduct) {
    this.availableInventory.update((p) => p - 1 >= 0 ? p - 1 : 0);

    if (this.availableInventory() == 0)
      this.isButtonDisabled.set(true);

    //console.log(this.availableInventory());
  }

  getPriceClasses() {
    return { 'strikethrough': this.product().discount > 0, 'full-price': this.product().discount == 0 };
  }
}
