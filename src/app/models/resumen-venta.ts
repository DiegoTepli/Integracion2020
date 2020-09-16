export class ResumenVenta {
    constructor(_idBill = '', _idMP = '', date = '', total = '', totalPeriod = '')
    {
        this._idBill = _idBill;
        this._idMP = _idMP;
        this.date = date;
        this.total = total;
        this.totalPeriod = totalPeriod;
       
    }

    _idBill: string;
    _idMP: string;
    date: string;
    total: String;
    totalPeriod: string;
   
}
