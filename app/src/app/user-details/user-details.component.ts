import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  @Input('userDetail') user: any;
  @Input() userIndex: any;
  @Output() removeUserEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  removeUser(){
    console.log(this.userIndex)
    this.removeUserEvent.emit(this.userIndex)}
}
