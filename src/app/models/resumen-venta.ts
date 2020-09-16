export class ResumenVenta {
    constructor(_idFactura = '', _idMP = '', Fecha = '', Total = '', TotalPeriodo = '')
    {
        this._idFactura = _idFactura;
        this._idMP = _idMP;
        this.Fecha = Fecha;
        this.Total = Total;
        this.TotalPeriodo = TotalPeriodo;
       
    }

    _idFactura: string;
    _idMP: string;
    Fecha: string;
    Total: String;
    TotalPeriodo: string;
   
}
