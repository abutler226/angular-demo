import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import allProducts from '../products.json'
import { IProduct } from '../product-details/product.model';

@Component({
  selector: 'ab-products',
  imports: [FormsModule],
  styleUrl: './products.component.css',
  templateUrl: './products.component.html',
})
export class ProductsComponent {
  pageTitle = 'Product Selection';
  quantity = signal(1);
  products = signal<IProduct[]>(allProducts);
  product1: IProduct | undefined;
  selectedProduct = signal<IProduct | undefined>(undefined);

  setSelectedProduct() {
    this.selectedProduct.set(this.products()[1]);
  }
  getSelectedProduct() {
    console.log(this.selectedProduct()?.name);
  }
  onProductChange(event: Event) {
    //this direct updating should not be needed, but selectedProduct() is not updated with just the ngModel binding on <select>
    const target = event.target as HTMLSelectElement;
    const found = this.products().find(u => u.name === target.value);
    this.selectedProduct.set(found);
  }
  onDecrease() {
    this.quantity.update(q => q <= 0 ? 0 : q - 1);
  }
  onIncrease() {
    this.quantity.update(q => q + 1);
  }
}

