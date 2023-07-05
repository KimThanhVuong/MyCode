import { DetailPageComponent } from './detail-page/detail-page.component';
import { WomanComponent } from './woman/woman.component';
import { MenComponent } from './men/men.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CheckOutComponent} from "./check-out/check-out.component";
  import { DetailPage1Component } from './detail-page1/detail-page1.component';

const routes: Routes = [
  {path: 'Home' , component:  HomeComponent},
  {path: 'About' , component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'Checkout', component: CheckOutComponent},
  {path: 'Men', component: MenComponent},
  {path: 'Woman', component: WomanComponent},
  {path: 'details/:id', component: DetailPageComponent},
  //Chỗ này nè
  {path: 'detailswoman/:id', component: DetailPage1Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [AboutComponent,HomeComponent,ContactComponent,MenComponent,WomanComponent,];
