export interface Order {
    OrderId: number;
    OrderDate: Date;
    UserId: string;
    Products: {
      ProductId: number;
      Quantity: number;
    }[];
    PaymentType: string;
    
  }