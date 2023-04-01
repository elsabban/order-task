import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './pages/orders/orders.component';
import { ProductsComponent } from './pages/products/products.component';
import { OrderDetailComponent } from './pages/order-detail/orderDetail.component';

const routes: Routes = [
  {path:'products',component:ProductsComponent},
  {path:'orders/order-detail/:id',component:OrderDetailComponent},
  {path:'orders',component:OrdersComponent},
  {path:'**',redirectTo:'products'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
