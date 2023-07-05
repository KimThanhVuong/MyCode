import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import {Product} from "../models/product";
import {NotificationService} from "../services/toastr.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {

  list: Product[] | undefined; 
  cart: Product[] | undefined;

  // syntax (câu lệnh) trong angularjs
  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.productService.sharedCartProducts.subscribe((item:any) => this.cart = item);
    this.list = this.productService.getProducts();
  }

  // function 
  addToCart(product: any) {
    this.productService.addToCart(product);
  }
  
}
