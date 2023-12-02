import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';



@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.scss']
})
export class DashboardsComponent extends BaseComponent implements OnInit{
  constructor( spinner : NgxSpinnerService, private alertifyService : AlertifyService){
    super(spinner)
  }
  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallAtom);
}

  Alert(){
    this.alertifyService.message("Merhaba",{
      messageType : MessageType.Success,
      delay : 5,
      position : Position.TopRight
    });

  }

  dismiss(){
    this.alertifyService.dismiss();
  }


}
