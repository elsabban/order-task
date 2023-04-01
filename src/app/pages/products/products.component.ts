import { Component, OnInit } from '@angular/core';
import { GetService } from 'src/app/utilities/services/get.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  products!:any[];
  constructor(private getServ:GetService) {
    }

  ngOnInit(): void {
    //http get products data
    this.getServ.get('products.json').subscribe(
      {
        next:(res) => {
            this.products = res;
        },
        error:(err) => {
            console.log(err)
        },
      }
    )
  }  
  addOrder() {

  }
}
