import { Injectable, signal } from '@angular/core';
import allProducts from '../products.json'

//@Service: standard, root-scoped singletons
//@Injectable: advanced or scoped dependency injection

@Injectable({
  providedIn: 'root'
})

export class InventoryService {
    //initial object looks like: {123:5, 456:5, 789:5}
    private inventoryFromProducts = allProducts.reduce((acc, product) => {
        acc[product.id] = 5;
        return acc;
    }, {} as Record<number, number>);

    private allInventory = signal<Record<number, number>>(this.inventoryFromProducts);//Record: keyed object (Dictionary<,>)

    constructor() { }

    get(productId: number):number{
        return this.allInventory()[productId] ?? 0;
    }

    increment(productId: number){
        //Linq: ({...currentList, [index]: [value]+1})
        this.allInventory.update(i=>({...i, [productId]: i[productId]+1}));
    }

    decrement(productId: number){
        //Linq: ({...currentList, [index]: [value]-1})
        this.allInventory.update(i=>({...i, [productId]: i[productId]-1}));
    }
}
