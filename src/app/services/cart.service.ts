import { Injectable, signal } from '@angular/core';
import { IProduct } from '../product-details/product.model';
import { InventoryService } from './inventory.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = signal<IProduct[]>([]);

  constructor(private inventoryService: InventoryService) { }

  addToCart(product: IProduct) {
    this.inventoryService.decrement(product.id);

    const currentQty = this.cart().find(p => p.id === product.id)?.quantity ?? 0;

    //if exists, update qty; if not exists, add product to cart
    if (currentQty > 0) {
      this.cart.update(cart => cart.map(p => p.id === product.id ? { ...p, quantity: currentQty + 1 } : p));
    } else {
      product.quantity = 1;
      this.cart.update(cart => [...cart, product]);
    }

  }

  removeFromCart(product: IProduct) {
    this.inventoryService.decrementAll(product.id);
    product.quantity = 0;//reset: TODO - add single decrement option or qty text box on component with updateQty function here
    this.cart.update(cart => cart.filter(p => p.id != product.id));
  }
}