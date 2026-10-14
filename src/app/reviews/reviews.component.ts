import { Component, inject } from '@angular/core';
import { ReviewService } from '../services/review.service';

@Component({
  selector: 'ab-reviews',
  styleUrl: './reviews.component.css',
  templateUrl: './reviews.component.html',
})
export class ReviewsComponent {
  private reviewService = inject(ReviewService);

  reviews = this.reviewService.reviewsResource.value;
  isLoading = this.reviewService.reviewsResource.isLoading;
}
