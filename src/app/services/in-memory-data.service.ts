import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import allProducts from '../products.json'

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    
    const products = allProducts;
    return { products }; // This defines the base endpoint as api/products
  }
}