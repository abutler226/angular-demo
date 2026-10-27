import { Component, signal, input, output } from '@angular/core';
import { IProduct } from './product.model';
import { CommonModule } from '@angular/common';
import { CategoryToPartTypePipe } from '../category-to-part-type-pipe';
import { CartService } from '../services/cart.service';
import { SliderComponent } from '../slider/slider.component';

@Component({
  selector: 'ab-product-details',
  imports: [CommonModule, CategoryToPartTypePipe, SliderComponent],
  styleUrl: './product-details.component.css',
  templateUrl: './product-details.component.html',
})
export class ProductDetailsComponent {
  constructor(private cartService: CartService) { }

  product = input.required<IProduct, IProduct>({ transform: this.normalizeDiscount });
  mode = input<'shop' | 'cart'>('shop');

  favorite = signal(3);

  //  basic transform:
  //width = input({ transform: (w: number) => w + 'px' });
  //  strongly typed transform with in/out types and default val: input<[output type], [input type]>(['default'], {transform...})
  //width = input<string,number>('5px', { transform: (w: number) => w + 'px' });

  availableInventory = signal(5);
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

  updateInventory(product: IProduct) {
    this.availableInventory.update((p) => p - 1 >= 0 ? p - 1 : 0);

    if (this.availableInventory() == 0)
      this.isButtonDisabled.set(true);

    //console.log(this.availableInventory());
  }

  getPriceClasses() {
    return { 'strikethrough': this.product().discount > 0, 'full-price': this.product().discount == 0 };
  }

  //communication with parent component via output variables:

  removeFromCart = output<IProduct>();
  remove() {
    this.removeFromCart.emit(this.product());
  }
  // removeFromCart(product: IProduct) {
  //   this.cartService.removeFromCart(product);
  // }

  addToCart = output<IProduct>();
  add() {
    this.updateInventory(this.product());
    this.addToCart.emit(this.product());
  }
  // addToCart(product: IProduct, event: MouseEvent) {
  //   //this.updateInventory(product);
  //   this.cartService.addToCart(product);
  // }
}
