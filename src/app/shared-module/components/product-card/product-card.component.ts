import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() productData:any;
  constructor() {

  }
  ngOnInit(): void {
    
  }

  editproduct(productData:any) {
    
  }
  deleteproduct(productData:any) {

  }
}
