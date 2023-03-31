import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    ProductCardComponent,
    UserCardComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ProductCardComponent,
    UserCardComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
