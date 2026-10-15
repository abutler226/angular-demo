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

    // reviewsResource = httpResource<IReview[]>(() =>
    //     `${this.reviewsUrl}?productId=^${this.productService.selectedProduct()?.id}$`, { defaultValue: [] });

    reviewsResource = httpResource<IReview[]>(() => {
        const p = this.productService.selectedProduct();
        if(p)
            return `${this.reviewsUrl}?productId=^${p.id}$`;
        else
            return undefined;
    }, { defaultValue: [] });

    eff1 = effect(() => console.log('loading reviews: ', this.reviewsResource.isLoading()));
    eff2 = effect(() => console.log('selectedProduct: ', this.productService.selectedProduct()));
}
