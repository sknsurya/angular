import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  a:any
  isDisabled:boolean= false
  twoWayBinding : any;
  
  isEnable : boolean = true
 


  constructor() { }

  ngOnInit(): void {
  }
   ////two way controller<------------->view(task one)
   data(event : any){
    if(event.target.value){
      this.isEnable = false
      return;
    }
    this.isEnable = true
  }
  enable(){
    this.twoWayBinding = ""
    this.isEnable = true
  }

//disable button 
  myButton(event:any){
    console.log("hi",event);
    this.isDisabled = true
  }
  keyPress(events:any){
     console.log(events.target.value);
     this.a=events.target.value

}
}
