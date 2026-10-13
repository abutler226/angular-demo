import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignalsComponent } from './signals/signals.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  //{ path: '', redirectTo: 'catalog', pathMatch: 'full' }, //redirects to catalog page, no root access
  { path: '', component: HomeComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'cart', component: CartComponent },
  { path: 'signals', component: SignalsComponent },
  { path: 'products', component: ProductsComponent },

  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CatalogComponent, ProductDetailsComponent],
  exports: [RouterModule, CatalogComponent, ProductDetailsComponent]
})
export class AppRoutingModule { }
