import { Component, OnInit } from '@angular/core';
import { catchError, forkJoin, of } from 'rxjs';
import { GetService } from 'src/app/utilities/services/get.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit{
  orders:any;
  products:any;
  constructor(private getServ:GetService) {
    }

  ngOnInit(): void {
    // http get orders & products data
    // using forkjoin to ensure all data are available
    const Orders = this.getServ.get('orders.json').pipe(catchError(error => of(error)));
    const Products = this.getServ.get('products.json').pipe(catchError(error => of(error)));

    forkJoin([Orders, Products]).subscribe(results => {
      this.orders = results[0];
      this.products = results[1];
      this.getOrderProductsTotalPrice(this.orders)
    });
  }
  // loop over orders array and get order's products array
  getOrderProductsTotalPrice(orders:any[]) {
    orders.forEach(
      order => {
        order.totalPrice = this.calculateTotalPrice(order.Products)
      }
    )
  }
  // get total price of each order
  calculateTotalPrice(products:any[]) {
    let prices:number[] = []
    // loop over order's products to get each price
    products.forEach(
      product => {
        //  get product detail form products array
        let eachProduct = this.products.find((item:any) => 
               item.ProductId == product.ProductId
           )
        //  push prices to array to get the sum
        prices.push(eachProduct.ProductPrice * product.Quantity)   
      }
    )
    // get sum of the prices array
    const sum = prices.reduce((partialSum:number, a:number) => partialSum + a, 0);
    return sum
  }
  }  

