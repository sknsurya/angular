import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baneer',
  templateUrl: './baneer.component.html',
  styleUrls: ['./baneer.component.scss']
})
export class BaneerComponent implements OnInit {
  isActive:boolean=true;
 schools = [{schoolId:1,schoolName:'earth'},{schoolId:2,schoolName:'mars'},{schoolId:3,schoolName:'saturn'}]
  constructor() { }

  ngOnInit(): void {
  }

}
