export class Product {

    constructor(_id = '', name = '', creationDate = '', price = 0, stock = 0, productStatus = '')
    {
        this._id = _id;
        this.name = name;
        this.creationDate = creationDate;
        this.price = price;
        this.stock = stock;
        this.productStatus = productStatus;
    }

    _id: string;
    name: string;
    creationDate: string;
    price: number;
    stock: number;
    productStatus: string;
}
