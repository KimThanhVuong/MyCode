import { ProductService } from './../services/product.service';
import { Product } from './../models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit {

  Product: any;
  list: Product[] = [];
  
  
  constructor(
    private ProductService: ProductService,
  ) { }

    
  ngOnInit(): void {

    this.list = this.ProductService.getCart();
    console.log("tét"+this.list.length);
    
  }
  

  delete() {
    //  xóa dòng này luôn vì mình remove hết chứ không phải remove từng thằng
    // this.list.splice(this.list.indexOf(this.Product), 1);
  
                 
    // Chỗ này  xài clear() thì nó sẽ xóa hết tất cả data luôn nên không xài thằng này
    // localStorage.clear();

    // Chỗ này mình remove dựa trên cái tên mình lấy ra thôi
    // remove local storage
    localStorage.removeItem("card_item");

    //render your array cart 
    this.list = this.ProductService.getCart();
    
    // dòng này dư   không cần viết lại tại vì dòng 39 là đã lấy data ra rồi
    // rerender your array
    // this.list = [...this.list];

    // cái này là render lại cái cart vì mình đang xài biến xài chung 
    this.ProductService.clearProductAfterCheckOut();

  }
}

function deletecheckout() {
  throw new Error('Function not implemented.');
}

