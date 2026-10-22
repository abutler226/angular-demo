import { Component, signal, Signal } from '@angular/core';
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
  isButtonDisabled = signal(false);//should be linkedSignal to update when all items removed;

  constructor(private cartService: CartService) {
    this.cartItems = this.cartService.cart;

    this.isButtonDisabled.update((b) => this.cartItems().length==0);
  }
}
