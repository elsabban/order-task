import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, catchError, forkJoin, map, of } from 'rxjs';
import { GetService } from 'src/app/utilities/services/get.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './orderDetail.component.html',
  styleUrls: ['./orderDetail.component.scss']
})
export class OrderDetailComponent implements OnInit {
  orders: any;
  products: any;
  customers: any;
  routeSub: Subscription = new Subscription();
  orderId!: number;
  crntOrder: any;
  userData: any;
  productsDetails: any;
  constructor(private getServ: GetService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // get crnt order id from url
    this.routeSub = this.route.params.subscribe(params => {
      this.orderId = params['id']
    });
    
    // get current order from orders array
    this.getServ.get('orders.json').pipe(map(res => {
      return res.find((order: any) =>
        order.OrderId == this.orderId
      )
    })).subscribe({
      next: (res) => {
        this.crntOrder = res;
        // get user data related to requested order
        this.userData = this.getCustomerData(res.UserId);
        // get products data related to requested order
        this.productsDetails = this.getProductsData(res.Products);
      },
      error: (err) => { 
        console.log(err)
      }
    })
  }

  // handling customer data
  getCustomerData(userId: any) {
    // find related user data from the users array
    this.getServ.get('users.json').pipe(map(res => {
      return res.find((user: any) =>
        user.Id == userId
      )
    })).subscribe({
      next: (res) => {
        this.userData = res
      },
      error: (err) => { 
        console.log(err)
      }
    })
  }
  // handling products data
  getProductsData(product: any[]) {
    let orderProducts: any[] = []
    // find related products data from the products array
    this.getServ.get('products.json').pipe(map(res => {
      // loop over order's product array 
      product.forEach((item: any) => {
        // get each product detail form original product array
        let fetchedProduct = res.find((product: any) =>
          product.ProductId == item.ProductId
        )
        // add quantity to original product object
        fetchedProduct.Quantity = item.Quantity
        // fill array with modified products objects
        orderProducts.push(fetchedProduct)

      })
      return orderProducts

    })).subscribe({
      next: (res) => {
        this.productsDetails = res
      },
      error: (err) => { 
        console.log(err)
      }
      
    })
  }
}