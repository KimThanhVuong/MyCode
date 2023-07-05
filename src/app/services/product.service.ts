import {Injectable} from "@angular/core";
import {Product} from "../models/product";
import {NotificationService} from "./toastr.service";
import {LIST_DATA} from "../home/ListData";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class ProductService {

  products: Product[] | undefined;
  product: Product | undefined;
  private cartProducts = new BehaviorSubject<Product[]>(this.getCart());
  sharedCartProducts = this.cartProducts.asObservable();

  private totalPrice = new BehaviorSubject<number>(this.getTotalPrice());
  sharedTotalPrice = this.totalPrice.asObservable();


  // favouriteProducts
  favouriteProducts: FavouriteProduct[] | undefined;

  constructor(
    private toastrService: NotificationService
  ) {
  }

  nextCart(product:Product[]){
    this.cartProducts.next(product);
  }

  nextTotal(total:number){
    this.totalPrice.next(total);
  }

  getProducts() {
    this.products = [...LIST_DATA];
    return this.products;
  }

  getCart(){
    const list: Product[] = JSON.parse(window.localStorage.getItem("card_item") || "[]") || [];
    return list;
  }

  getTotalPrice(){
    let tempTotalPrice = 0 ;
    this.getCart()?.map((item:any) => {
      tempTotalPrice = tempTotalPrice +  item?.productQuantity * item.productPrice;
    })
    return tempTotalPrice;
  }


  // Adding new Product to cart db if logged in else localStorage
  addToCart(data: Product){
    let tempTotalPrice = 0;
    const list: Product[] = JSON.parse(window.localStorage.getItem("card_item") || "[]") || [];
    const index = list.findIndex((product: any) => product.productId == data.productId);
    // if product is already existed then +1 else add it
    if (index >= 0) {
      list[index] = {
        ...list[index],
        productQuantity: list[index].productQuantity + data.productAdded,
      }
    } else {
      const product = {
        ...data,
        productQuantity: data.productAdded,
      }
      list.push(product);
    }

    localStorage.setItem("card_item", JSON.stringify(list));
    this.nextCart([...list])
    list?.map((item:any) => {
      tempTotalPrice = tempTotalPrice +  item?.productQuantity * item.productPrice;
    })
    this.nextTotal(tempTotalPrice);
  }

  // Removing cart from local
  removeLocalCartProduct(product: Product) {
    const products: Product[] = JSON.parse(localStorage.getItem("avct_item") || "[]");

    for (let i = 0; i < products.length; i++) {
      if (products[i].productId === product.productId) {
        products.splice(i, 1);
        break;
      }
    }
    // ReAdding the products after remove
    localStorage.setItem("avct_item", JSON.stringify(products));
  }

  // Fetching Locat CartsProducts
  getLocalCartProducts(): Product[] {
    const products: Product[] =
      JSON.parse(localStorage.getItem("avct_item") || "[]") || [];

    return products;
  }

  clearProductAfterCheckOut() {
    this.nextCart([]);
    this.nextTotal(0);
  }

  // createProduct(data: Product, callback: () => void) {
  //   this.products.push(data);
  //   callback();
  // }
  //
  // getProductById(key: string) {
  //   // this.product = this.db.object("products/" + key);
  //   return this.product;
  // }
  //
  // updateProduct(data: Product) {
  //   this.products.update(data.$key, data);
  // }
  //
  // deleteProduct(key: string) {
  //   this.products.remove(key);
  // }
  //
  // /*
  //  ----------  Favourite Product Function  ----------
  // */
  //
  // // Get Favourite Product based on userId
  // async getUsersFavouriteProduct() {
  //   // const user = await this.authService.user$.toPromise();
  //   // this.favouriteProducts = this.db.list("favouriteProducts", (ref) =>
  //   //   ref.orderByChild("userId").equalTo(user.$key)
  //   // );
  //   // return this.favouriteProducts;
  //   return new Promise((res, rej) => {
  //     res([]);
  //   });
  // }
  //
  // // Adding New product to favourite if logged else to localStorage
  // addFavouriteProduct(data: Product): void {
  //   const a: Product[] = JSON.parse(localStorage.getItem("avf_item")  || "") || [];
  //   a.push(data);
  //   this.toastrService.wait("Adding Product", "Adding Product as Favourite");
  //   setTimeout(() => {
  //     localStorage.setItem("avf_item", JSON.stringify(a));
  //   }, 1500);
  // }
  //
  // // Fetching unsigned users favourite proucts
  // getLocalFavouriteProducts(): Product[] {
  //   const products: Product[] =
  //     JSON.parse(localStorage.getItem("avf_item") || "") || [];
  //
  //   return products;
  // }
  //
  // // Removing Favourite Product from Database
  // removeFavourite(key: string) {
  //   this.favouriteProducts.remove(key);
  // }
  //
  // // Removing Favourite Product from localStorage
  // removeLocalFavourite(product: Product) {
  //   const products: Product[] = JSON.parse(localStorage.getItem("avf_item") || "");
  //
  //   for (let i = 0; i < products.length; i++) {
  //     if (products[i].productId === product.productId) {
  //       products.splice(i, 1);
  //       break;
  //     }
  //   }
  //   // ReAdding the products after remove
  //   localStorage.setItem("avf_item", JSON.stringify(products));
  // }

  /*
   ----------  Cart Product Function  ----------
  */


}

export class FavouriteProduct {
//   product: Product;
//   productId: string;
//   userId: string;
}
