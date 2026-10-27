import { Component, signal, input, output, computed } from '@angular/core';
import { IProduct } from './product.model';
import { CommonModule } from '@angular/common';
import { CategoryToPartTypePipe } from '../category-to-part-type-pipe';
import { SliderComponent } from '../slider/slider.component';
import { InventoryService } from '../services/inventory.service';

@Component({
  selector: 'ab-product-details',
  imports: [CommonModule, CategoryToPartTypePipe, SliderComponent],
  styleUrl: './product-details.component.css',
  templateUrl: './product-details.component.html',
})
export class ProductDetailsComponent {
  constructor(private inventoryService: InventoryService) { }

  product = input.required<IProduct, IProduct>({ transform: this.normalizeDiscount });
  mode = input<'shop' | 'cart'>('shop');

  favorite = signal(3);

  availableInventory = computed(() => this.inventoryService.get(this.product().id));
  isButtonDisabled = signal(false);
  message = "";

  inventoryMap = {
    '=0': 'Out of Stock',
    '=1': 'Only one left!',
    '=2': 'Few left!',
    '=3': 'Few left!',
    '=4': 'Few left!',
    other: 'Get yours today!',
  }

  //sanitize discount value with transform function to prevent discount > 100%
  normalizeDiscount(product: IProduct): IProduct {
    if (product.discount < 1)
      return product;

    return { ...product, discount: product.discount / 100 };
  }

  sliderChange(newValue: number) {
    console.log("new slider value: ", newValue);
  }

  getImageURL(product: IProduct) {
    return '/images/robot-parts/' + product.imageName;
  }

  getPriceClasses() {
    return { 'strikethrough': this.product().discount > 0, 'full-price': this.product().discount == 0 };
  }

  //communication with parent component via output variables:
  removeFromCart = output<IProduct>();
  remove() {
    this.removeFromCart.emit(this.product());
  }

  addToCart = output<IProduct>();
  add() {
    this.addToCart.emit(this.product());
  }
}
