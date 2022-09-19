import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  s:any
  // isDisabled:boolean= false
  // twoWayBinding : any;
  
  // isEnable : boolean = true
 


  constructor() { }

  ngOnInit(): void {}

  mybtn(event:any){
    console.log("iam suryakumar",event);

}
}
