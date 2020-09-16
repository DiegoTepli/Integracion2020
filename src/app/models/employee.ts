export class Employee {

    constructor(_id = '', Nombre = '', Apellido = '', FechaDeNacimiento = '', Pais = '', Ciudad = '', DNI = 0, Sexo = '', EstadoCivil = '', CorreoElectronico = '', Telefono = 0, Direccion = '', 
    FechaDeIngreso = '', Estado = '', Puesto = '', HorasDeTrabajo = 0,  Turno = '', Horario = '', Sueldo = 0, CargasFamiliares = 0, CBU = 0, Banco = '', ObraSocial = '',  )
    {
        this._id = _id;
        this.Nombre = Nombre;
        this.Apellido = Apellido;
        this.FechaDeNacimiento = FechaDeNacimiento;
        this.Pais = Pais;
        this.Ciudad = Ciudad;
        this.DNI = DNI;
        this.Sexo = Sexo;
        this.EstadoCivil = EstadoCivil;
        this.CorreoElectronico = CorreoElectronico;
        this.Telefono = Telefono;
        this.Direccion = Direccion;
        this.FechaDeIngreso = FechaDeIngreso;
        this.Estado = Estado;
        this.Puesto = Puesto;
        this.HorasDeTrabajo = HorasDeTrabajo;
        this.Turno = Turno;
        this.Horario = Horario;
        this.Sueldo = Sueldo;
        this.CargasFamiliares = CargasFamiliares;
        this.CBU = CBU;
        this.Banco = Banco;
        this.ObraSocial = ObraSocial;
    }

    _id: string;
    Nombre: string;
    Apellido: string;
    FechaDeNacimiento: String;
    Pais: string;
    Ciudad: string;
    DNI: number;
    Sexo: String;
    EstadoCivil: String;
    CorreoElectronico: String;
    Telefono: number;
    Direccion: string;
    FechaDeIngreso: String;
    Estado: String;
    Puesto: String;
    HorasDeTrabajo: Number;
    Turno: String;
    Horario: String;
    Sueldo: number;
    CargasFamiliares: number;
    CBU: number;
    Banco: String;
    ObraSocial: String;
}
