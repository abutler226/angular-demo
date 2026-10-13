import { Component, signal, effect, computed } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import allProducts from '../products.json'
import { IProduct } from '../product-details/product.model';

@Component({
  selector: 'ab-products',
  imports: [FormsModule, CurrencyPipe],
  styleUrl: './products.component.css',
  templateUrl: './products.component.html',
})
export class ProductsComponent {
  pageTitle = 'Product Selection';
  quantity = signal(1);
  price = signal(0)
  products = signal<IProduct[]>(allProducts);
  product1: IProduct | undefined;
  selectedProduct = signal<IProduct | undefined>(undefined);
  total = computed(() => (this.selectedProduct()?.price ?? 0) * this.quantity());

  setSelectedProduct() {
    this.selectedProduct.set(this.products()[1]);
  }
  getSelectedProduct() {
    console.log(this.selectedProduct()?.name);
  }
  getQuantity() {
    console.log(this.quantity());
  }

  onDecrease() {
    this.quantity.update(q => q <= 0 ? 0 : q - 1);
  }
  onIncrease() {
    this.quantity.update(q => q + 1);
  }

  //debugging using effect()
  qtyEffect = effect(() => console.log('quantity: ', this.quantity()));
}

