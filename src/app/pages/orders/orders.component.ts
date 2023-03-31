import { Component, OnInit } from '@angular/core';
import { GetService } from 'src/app/utilities/services/get.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit{
  constructor(private getServ:GetService) {
    }

  ngOnInit(): void {
    // http get orders data
    this.getServ.get('orders.json').subscribe(
      (res) => {
        console.log(res)
      }
    )
  }  
}
