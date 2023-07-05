import { ProductService } from './../services/product.service';
import { OderDetailsService } from './../ServiceDetails/oder-details.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent implements OnInit {

  constructor(private service:OderDetailsService , private productService:ProductService) { }
  Detail:any;

  ngOnInit(): void {
    this.Detail = this.service.Details;
  }
  addToCart(Detail: Product){
    this.productService.addToCart(Detail);
  }
}
