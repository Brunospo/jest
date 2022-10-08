import { CartItem } from "../classes/interfaces/cart-item";

export class Product implements CartItem {
  constructor(public name: string, public price: number) {}
}
