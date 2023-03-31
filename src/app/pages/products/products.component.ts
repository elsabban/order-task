import { Component, OnInit } from '@angular/core';
import { GetService } from 'src/app/utilities/services/get.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  constructor(private getServ:GetService) {
    }

  ngOnInit(): void {
    //http get products data
    this.getServ.get('products.json').subscribe(
      (res) => {
        console.log(res)
      }
    )
  }  
}
