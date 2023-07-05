import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ProductService} from "./services/product.service";
import {CheckOutComponent} from "./check-out/check-out.component";
import { MenComponent } from './men/men.component';
import { WomanComponent } from './woman/woman.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { DetailPage1Component } from './detail-page1/detail-page1.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    CheckOutComponent,
    MenComponent,
    WomanComponent,
    DetailPageComponent,
    DetailPage1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right'
    }),
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],

})
export class AppModule { }
