import { ProductService } from './../services/product.service';
import { OderWomanService } from './../serviceDetailWoman/oder-woman.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';


@Component({
  selector: 'app-woman',
  templateUrl: './woman.component.html',
  styleUrls: ['./woman.component.css']
})
export class WomanComponent implements OnInit {

 constructor(private service:OderWomanService , private productService:ProductService) { }
  Detail:any;

  ngOnInit(): void {
    this.Detail = this.service.Details;
  }
  addToCart(Detail: Product){
    this.productService.addToCart(Detail);
  }
}
