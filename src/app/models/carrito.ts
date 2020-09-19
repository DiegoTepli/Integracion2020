import { Product } from '../models/product';
export class Carrito {

    constructor(_id = '', product = '', amount = 1, price = 0, subTotal = 0, total = 0)
    {
        this._id = _id;
        this.product = product;
        this.amount = amount;
        this.price = price;
        this.subTotal = subTotal;
        
    }

    _id: string;
    product: string;
    amount: number;
    price: number;
    subTotal: number;
   
}
