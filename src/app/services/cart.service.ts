import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartItem';
import { CartItems } from '../models/CartItems';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(product:Product){
    let item = CartItems.find(c=>c.product.productId===product.productId);
    if(item){
      item.quamtity += 1;
    }else{
      let cartItem = new CartItem();
      cartItem.product = product;
      cartItem.quamtity = 1;
      CartItems.push(cartItem)
    }
  }

  list():CartItem[]{
    return CartItems;
  }
}
