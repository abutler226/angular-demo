import { Component, signal, Signal } from '@angular/core';
import { IProduct } from '../product-details/product.model';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { CartService } from '../services/cart.service';
import { NgClass } from '../../../node_modules/@angular/common/types/_common_module-chunk';

@Component({
  selector: 'ab-cart',
  imports: [CartItemComponent, NgClass],
  styleUrl: './cart.component.css',
  templateUrl: './cart.component.html'
})
export class CartComponent {
  cartItems: Signal<IProduct[]>;
  isButtonDisabled = signal(false);//should be linkedSignal to update when all items removed;

  constructor(private cartService: CartService) {
    this.cartItems = this.cartService.cart;

    this.isButtonDisabled.update((b) => this.cartItems().length==0);
    console.log(this.isButtonDisabled());
  }
}
