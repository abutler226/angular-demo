import { Component, input } from '@angular/core';
import { IProduct } from '../product-details/product.model'
import { CurrencyPipe, NgClass } from '@angular/common';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'ab-cart-item',
  imports: [CurrencyPipe, NgClass],
  styleUrl: './cart-item.component.css',
  templateUrl: './cart-item.component.html',
})
export class CartItemComponent {
  product = input.required<IProduct>();

  constructor(private cartService: CartService) {}

  getImageURL(product: IProduct) {
    return '/images/robot-parts/' + product.imageName;
  }

  removeFromCart(){
    this.cartService.removeFromCart(this.product());
  }

  getPriceClasses() {
    return { 'strikethrough': this.product().discount > 0, 'full-price': this.product().discount == 0 };
  }
}
