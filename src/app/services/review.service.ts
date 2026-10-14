import { httpResource } from "@angular/common/http";
import { effect, inject, Injectable } from "@angular/core";
import { ProductService } from "./product.service";
import { IReview } from "../reviews/reviews.model";

@Injectable({
    providedIn: 'root'
})

export class ReviewService {
    private reviewsUrl = 'api/reviews';
    private productService = inject(ProductService);

    reviewsResource = httpResource<IReview[]>(() =>
        //`${this.reviewsUrl}?productId=0`, { defaultValue: [] });
        `${this.reviewsUrl}?productId=^${this.productService.selectedProduct()?.id}$`, { defaultValue: [] });
}
