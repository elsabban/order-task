import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/utilities/interfaces/product.interface';
import { GetDataService } from 'src/app/utilities/services/get-data.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  products!:any[];
  constructor(private getData:GetDataService) {
    }

  ngOnInit(): void {
    //http get products data
    this.getData.getProducts().subscribe(
      {
        next:(res:Product[]) => {
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
