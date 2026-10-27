import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withDebugTracing } from '@angular/router';

//import { routes } from './app-routing-module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppData } from './app-data';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { SandboxComponent } from './sandbox/sandbox.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter([
  //{ path: '', redirectTo: 'catalog', pathMatch: 'full' }, //redirects to catalog page, no root access
  { path: '', component: HomeComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'cart', component: CartComponent },
  { path: 'sandbox', component: SandboxComponent },
  { path: 'products', component: ProductsComponent },

  //{ path: '**', component: PageNotFoundComponent }
]), //add , withDebugTracing() if needed for routing research
    importProvidersFrom(
      InMemoryWebApiModule.forRoot(AppData, { delay: 1000, passThruUnknownUrl: true, apiBase: 'api/' })
    )
  ]
};