import { Component } from '@angular/core';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import allProducts from '../products.json';
import { FilterByCategoryPipePipe } from '../filter-by-category-pipe-pipe';
import { IProduct } from '../product-details/product.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'ab-catalog',
  styleUrl: './catalog.component.css',
  templateUrl: './catalog.component.html',
  imports: [ProductDetailsComponent, FilterByCategoryPipePipe]
})
export class CatalogComponent {
  constructor(private cartService: CartService) { }

  products = allProducts;

  categoryFilter: string | null = null;

isButtonDisabled(){
  //todo: wire up with signal from child component
  return false;
}

  addProduct() {
    //update products to be full list plus new item
    this.products = [...this.products, {
      "id": 123,
      "description": "A center made for ants.",
      "productNotes": "This product will need to be at least.... 3 times bigger han this!",
      "name": "Center FKWW2L2RG",
      "imageName": "base-spring.png",
      "category": "bases",
      "price": 2001.90,
      "discount": 1
    }];
  }


    addToCart(product: IProduct) {
      //this.updateInventory(product);
      this.cartService.addToCart(product);
    }
}
