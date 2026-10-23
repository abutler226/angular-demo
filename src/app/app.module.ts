import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgClass } from '@angular/common';
import { App } from './app';

import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { SandboxComponent } from './signals/sandbox.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { LibraryComponent } from './library/library.component';
import { CategoryToPartTypePipe } from './category-to-part-type-pipe';
import { FilterByCategoryPipePipe } from './filter-by-category-pipe-pipe';

@NgModule({
  imports: [
    App,
    RouterModule,
    NgClass,
    CatalogComponent,
    CartComponent,
    SiteHeaderComponent,
    ProductsComponent,
    HomeComponent,
    LibraryComponent,
    SandboxComponent,
    CategoryToPartTypePipe, 
    FilterByCategoryPipePipe,
  ],
  declarations: [PageNotFoundComponent],
})
export class AppModule {}
