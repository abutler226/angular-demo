import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './product-details/product.model'

@Pipe({
  name: 'filterByCategory',
  //pure: false //monitor for changes, problematic, don't use
})
export class FilterByCategoryPipePipe implements PipeTransform {
  transform(products: IProduct[], category:string|null): IProduct[] {
    if(!category)
      return products;

    return products.filter(p=>p.category==category);
  }
}
