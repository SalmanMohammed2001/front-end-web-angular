import { Routes } from '@angular/router';
import {HomePageComponent} from "./pages/home/home-page/home-page.component";
import {ProductPageComponent} from "./pages/product/product-page/product-page.component";
import {NotFoundPageComponent} from "./core/not-found-page/not-found-page.component";

export const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomePageComponent},
  {path:'products',component:ProductPageComponent},
  {path:'**',component:NotFoundPageComponent},
];
