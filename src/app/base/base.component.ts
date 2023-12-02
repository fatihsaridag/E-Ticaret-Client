import { Component } from '@angular/core';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent {
  constructor(private spinner : NgxSpinnerService){

  }

  showSpinner(spinnerNameType : SpinnerType){
    this.spinner.show(spinnerNameType);

    setTimeout(() => {
        this.hideSpinner(spinnerNameType);
    }, 1000);


  }

  hideSpinner(spinnerNameType : SpinnerType){
    this.spinner.hide(spinnerNameType);
  }


}



export enum SpinnerType {
  BallAtom = "s1" ,
  BallSpinClockwiseFadeRotating = "s2" ,
  BallSquareSpin = "s3" 
}

// <ngx-spinner size="default" name="s1" type="ball-atom"></ngx-spinner>
// <ngx-spinner size="default" name="s2" type="ball-spin-clockwise-fade-rotating"></ngx-spinner>
// <ngx-spinner size="default" name="s3" type="ball-square-spin"></ngx-spinner>
