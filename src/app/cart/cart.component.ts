import { Component, Signal } from '@angular/core';
import { IProduct } from '../product-details/product.model';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'ab-cart',
  imports: [CartItemComponent],
  styleUrl: './cart.component.css',
  templateUrl: './cart.component.html'
})
export class CartComponent {
  cartItems: Signal<IProduct[]>;

  constructor(private cartService: CartService) {
    this.cartItems = this.cartService.cart;
  }
}
