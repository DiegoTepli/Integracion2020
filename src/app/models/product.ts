export class Product {

    constructor(_id = '', Nombre = '', FechaDeCreacion = '', Precio = 0, Stock = 0, Estado = '')
    {
        this._id = _id;
        this.Nombre = Nombre;
        this.FechaDeCreacion = FechaDeCreacion;
        this.Precio = Precio;
        this.Stock = Stock;
        this.Estado = Estado;
    }

    _id: string;
    Nombre: string;
    FechaDeCreacion: string;
    Precio: number;
    Stock: number;
    Estado: string;
}
