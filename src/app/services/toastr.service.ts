import { Injectable } from "@angular/core";
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: "root",
})
export class NotificationService  {
  constructor(private toastr: ToastrService) {}

  success(title: any, msg: any) {
    this.toastr.success(msg, title);
  }
  info(title: any, msg: any) {
    this.toastr.info(msg, title);
  }
  warning(title: any, msg: any) {
    this.toastr.warning(msg, title);
  }
  error(title: any, msg: any) {
    this.toastr.error(msg, title);
  }

  wait(title: any, msg: any) {
    this.toastr.info(msg, title, { timeOut: 3000 });
  }
}
