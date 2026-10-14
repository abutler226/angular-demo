import { httpResource } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IProduct } from "../product-details/product.model";

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private productsUrl = 'api/products';

    productsResource = httpResource<IProduct[]>(() => this.productsUrl, { defaultValue: [] });
}