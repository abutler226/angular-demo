import { Component, signal, effect, computed, linkedSignal, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import allProducts from '../products.json'
import { IProduct } from '../product-details/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'ab-products',
  imports: [FormsModule, CurrencyPipe],
  styleUrl: './products.component.css',
  templateUrl: './products.component.html',
})
export class ProductsComponent {
  pageTitle = 'Product Selection';
  private productService = inject(ProductService);

  price = signal(0)
  //products = signal<IProduct[]>(allProducts);
  products = this.productService.productsResource.value;
productsResource = this.productService.productsResource;//testing

  selectedProduct = signal<IProduct | undefined>(undefined);

  quantity = linkedSignal({
    source: this.selectedProduct,   //source of change
    computation: q => 1             //reset quantity(q) to 1
  });
  total = computed(() => (this.selectedProduct()?.price ?? 0) * this.quantity());
  color = computed(() => this.total() > 1000 ? 'green' : '');

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

  isQtyDisabled() {
    return this.selectedProduct() == undefined;
  }

  getQtyClass() {
    return { 'disable': this.selectedProduct() == undefined };
  }

  //debugging using effect()
  qtyEffect = effect(() => console.log('quantity: ', this.quantity()));
}

