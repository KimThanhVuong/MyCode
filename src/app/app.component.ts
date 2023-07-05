import { Component } from '@angular/core';
import { Product } from "./models/product";
import { ProductService } from "./services/product.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DongHo';
  total: number | undefined;
  cart: Product[] | undefined;
  product: any;
  list: any = [];
  constructor(
    private productService: ProductService,

  ) { }

  ngOnInit(): void {
    this.productService.sharedCartProducts.subscribe((item: any) => this.cart = item);
    this.productService.sharedTotalPrice.subscribe((item: any) => this.total = item);

    this.productService.getCart().some((response: any) => {
      this.list = response;
    });
  }
  
  delete() {
    console.log("test" + this.product);
    this.list.splice(this.list.indexOf(this.product), 1);
    // rerender your array
    this.list = [...this.list];

  }

}
