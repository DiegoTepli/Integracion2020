export class Venta {

    constructor(_id = '', Producto = '', Cantidad = 1, Precio = 0, Stock = 0, SubTotal = 0, Total = 0)
    {
        this._id = _id;
        this.Producto = Producto;
        this.Cantidad = Cantidad;
        this.Precio = Precio;
        this.Stock = Stock;
        this.SubTotal = SubTotal;
        this.Total = Total;
    }

    _id: string;
    Producto: string;
    Cantidad: number;
    Precio: number;
    Stock: number;
    SubTotal: number;
    Total: number;
}
