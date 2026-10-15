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

    //basic
    // reviewsResource = httpResource<IReview[]>(() =>
    //     `${this.reviewsUrl}?productId=^${this.productService.selectedProduct()?.id}$`, { defaultValue: [] });

    //with error handling for null value
    // reviewsResource = httpResource<IReview[]>(() => {
    //     const p = this.productService.selectedProduct();
    //     if(p)
    //         return `${this.reviewsUrl}?productId=^${p.id}$`;
    //     else
    //         return undefined;
    // }, { defaultValue: [] });

    //extended using options for reactive behavior
    reviewsResource = httpResource<IReview[]>(() => ({
        url: this.reviewsUrl,
        method: 'GET',
        headers: { accept: 'application/json' },
        params: {
            productId: `^${this.productService.selectedProduct()?.id ?? 0}$`
        }
    }));

    eff1 = effect(() => console.log('loading reviews: ', this.reviewsResource.isLoading()));
    eff2 = effect(() => console.log('selectedProduct: ', this.productService.selectedProduct()));
}
