import { httpResource } from "@angular/common/http";
import { Injectable, signal } from "@angular/core";
import { IProduct } from "../product-details/product.model";

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private productsUrl = 'api/products';

    // Signals to support the template
    selectedProduct = signal<IProduct | undefined>(undefined);

    //binds products when ProductService is injected
    //used to retrieve data across components, not for CRUD operations
    //data is retained after component destroyed; app life cycle
    productsResource = httpResource<IProduct[]>(() => this.productsUrl, { defaultValue: [] });

    //used to bind products when function is called
    //will load every time a page requests, and will destroy when component is destroyed; component life cycle
    getProducts(){
        return httpResource<IProduct[]>(() => this.productsUrl, { defaultValue: [] });
    }
}