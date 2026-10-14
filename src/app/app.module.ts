import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { App } from './app';
import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { SignalsComponent } from './signals/signals.component';
import { ProductsComponent } from './products/products.component';
import { NgClass } from '@angular/common';
import { HomeComponent } from './home/home.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    App,
    RouterModule,
    CatalogComponent,
    CartComponent,
    SiteHeaderComponent,
    ProductsComponent, 
    HomeComponent,
    NgClass
  ],
  declarations: [PageNotFoundComponent, SignalsComponent],
})
export class AppModule { }
