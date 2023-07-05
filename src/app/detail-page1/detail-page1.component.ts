import { ProductService } from './../services/product.service';
import { OderWomanService } from '../serviceDetailWoman/oder-woman.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';

@Component({
  selector: 'app-detail-page1',
  templateUrl: './detail-page1.component.html',
  styleUrls: ['./detail-page1.component.css']
})
export class DetailPage1Component implements OnInit {

  constructor(private param:ActivatedRoute, private service:OderWomanService , private productService:ProductService)
   { }
  getdetailId:any;
  Data:any;

  ngOnInit(): void {
    this. getdetailId = this.param.snapshot.paramMap.get('id');
    console.log(this. getdetailId,' getdetails');
    if(this.getdetailId){
      debugger
      this.Data =  this.service.Details.filter((value)=>{
        return value.productId == this.getdetailId;
      });
      console.log(this.Data,'Data>>');
      
    }
  }
  addToCart(Data: Product){
    this.productService.addToCart(Data);
  }
}