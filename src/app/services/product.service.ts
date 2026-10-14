import { httpResource } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IProduct } from "../product-details/product.model";

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private productsUrl = 'api/products';

    //binds products when ProductService in injected
    productsResource = httpResource<IProduct[]>(() => this.productsUrl, { defaultValue: [] });

    //used to bind products when function is called; will load every time a page requests, and will destroy when page lifecycle ends
    getProducts(){
        return httpResource<IProduct[]>(() => this.productsUrl, { defaultValue: [] });
    }
}