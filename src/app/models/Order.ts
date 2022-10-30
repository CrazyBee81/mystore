export class Order {
  id: number;
  user_id: string;
  status: string;
  total: number;
  shipping: number

  constructor(){
    this.id = 0;
    this.user_id = "";
    this.status = "";
    this.shipping = 0;
    this.total = 0;
  }

}
