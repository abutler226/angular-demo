import { httpResource } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IProduct } from "../product-details/product.model";

@Injectable({
    providedIn: 'root'
})

export class ReviewService {
    private reviewsUrl = 'api/reviews';

    productsResource = httpResource<IProduct[]>(() => this.reviewsUrl, { defaultValue: [] });
}
