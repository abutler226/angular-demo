import { Component, signal, Signal } from '@angular/core';
import { IProduct } from '../product-details/product.model';
import { CartService } from '../services/cart.service';
import { ProductDetailsComponent } from '../product-details/product-details.component';

@Component({
  selector: 'ab-cart',
  imports: [ProductDetailsComponent],
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
  
  removeFromCart(product: IProduct){
    this.cartService.removeFromCart(product);
  }
}
