import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './componets/login/login.component';
import { ProductAddComponent } from './componets/product-add/product-add.component';
import { ProductComponent } from './componets/product/product.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path:"",pathMatch:"full", component:ProductComponent},
  {path:"products", component:ProductComponent},
  {path:"products/category/:categoryId", component:ProductComponent},
  {path:"products/add", component:ProductAddComponent, canActivate:[LoginGuard]},
  {path:"login", component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
