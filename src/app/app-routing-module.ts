import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
    {path: 'catalog', component: CatalogComponent},
    {path: 'cart', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CatalogComponent, ProductDetailsComponent],
  exports: [RouterModule, CatalogComponent, ProductDetailsComponent]
})
export class AppRoutingModule { }
