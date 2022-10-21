export class User {
  id: number
  firstname: string;
  lastname: string;
  password: string;
  mail: string;
  address: string;
  city: string;
  zipCode: number;
  state: string;
  creditcard: number;

  constructor() {
    this.id = 0;
    this.firstname = "";
    this.lastname = "";
    this.password = "";
    this.mail = "";
    this.address = "";
    this.city = "";
    this.zipCode = 0;
    this.state = "";
    this.creditcard = 0;
  }
}
