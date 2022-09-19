import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {
  sk : any = "surya" 
  constructor() { }

  ngOnInit(): void {
  }
  data(event : any){
    this.sk=event.target.value
  }

}
