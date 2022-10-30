export class OrderProduct {
  id: number;
  product_id: number;
  order_id: number;
  quantity: number;
  user_id: number;
  status: string;
  name: string;
  price: number;
  category: string;
  url: string;
  description: string;

  constructor() {
    this.id = 0;
    this.product_id = 0;
    this.order_id = 0;
    this.quantity = 0;
    this.user_id = 0;
    this.status = "";
    this.name = "";
    this.price = 0;
    this.category = "";
    this.url = "";
    this.description = "";

  }

}
