import { Component, OnInit } from '@angular/core';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';



@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.scss']
})
export class DashboardsComponent implements OnInit{
  constructor(private alertifyService : AlertifyService){

  }
  ngOnInit(): void {

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
