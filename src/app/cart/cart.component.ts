import { Component } from '@angular/core';
import { IProduct } from '../product-details/product.model';
import { CartItemComponent } from '../cart-item/cart-item.component';
import allProducts from '../products.json'

@Component({
  selector: 'ab-cart',
  imports: [CartItemComponent],
  styleUrl: './cart.component.css',
  templateUrl: './cart.component.html'
})
export class CartComponent {
  //sample data: state management to come later
  cartItems: IProduct[] = [allProducts[3], allProducts[7], allProducts[5], allProducts[13]];
  //product: IProduct;
}
