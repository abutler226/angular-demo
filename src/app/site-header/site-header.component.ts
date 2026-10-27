import { Component, computed, linkedSignal, Signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../services/cart.service';
import { IProduct } from '../product-details/product.model';

@Component({
  selector: 'ab-site-header',
  imports: [RouterLink],
  styleUrl: './site-header.component.css',
  templateUrl: './site-header.component.html',
})
export class SiteHeaderComponent {
  cartItems: Signal<IProduct[]>;
  cartQuantity = linkedSignal({
    source: () => this.cartItems(),   //source of change
    computation: () => this.cartItems.length       //updates cartQ based on cart
  });
  
  constructor(private cartService: CartService) {
    this.cartItems = this.cartService.cart;
  }
 }
