import { Product } from './../models/product';
import { ProductService } from './../services/product.service';
import { OderDetailsService } from './../ServiceDetails/oder-details.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {

  constructor(private param:ActivatedRoute, 
              private service:OderDetailsService,
             private productService:ProductService) { }
  getdetailsId:any;
  detailData:any;

  ngOnInit(): void {
    this. getdetailsId = this.param.snapshot.paramMap.get('id');
    console.log(this. getdetailsId,' getdetails');
    if(this.getdetailsId){
      this.detailData =  this.service.Details.filter((value)=>{
        return value.productId == this.getdetailsId;
      });
      console.log(this.detailData,'detailData>>');
      
    }
  }
  addToCart(detailData: Product){
    this.productService.addToCart(detailData);
  }
}
