export class Employee {

    constructor(_id = '', name = '', lastName = '', dateOfBirth = '', country = '', city = '', dni = 0, gender = '', civilStatus = '', mail = '', phone = 0, address = '', 
    dateOfAdmission = '', employeeStatus = '', position = '', workHours = 0,  turn = '', schedule = '', salary = 0, familyResponsibilities = 0, cbu = 0, bank = '', socialWork = '',  )
    {
        this._id = _id;
        this.name = name;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.country = country;
        this.city = city;
        this.dni = dni;
        this.gender = gender;
        this.civilStatus = civilStatus;
        this.mail = mail;
        this.phone = phone;
        this.address = address;
        this.dateOfAdmission = dateOfAdmission;
        this.employeeStatus = employeeStatus;
        this.position = position;
        this.workHours = workHours;
        this.turn = turn;
        this.schedule = schedule;
        this.salary = salary;
        this.familyResponsibilities = familyResponsibilities;
        this.cbu = cbu;
        this.bank = bank;
        this.socialWork = socialWork;
    }

    _id: string;
    name: string;
    lastName: string;
    dateOfBirth: String;
    country: string;
    city: string;
    dni: number;
    gender: String;
    civilStatus: String;
    mail: String;
    phone: number;
    address: string;
    dateOfAdmission: String;
    employeeStatus: String;
    position: String;
    workHours: Number;
    turn: String;
    schedule: String;
    salary: number;
    familyResponsibilities: number;
    cbu: number;
    bank: String;
    socialWork: String;
}
