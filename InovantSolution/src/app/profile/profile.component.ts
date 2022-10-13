import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:any
  constructor() { }

  ngOnInit() {
   this.getDetail();
  }

  getDetail(){
    const users=localStorage.getItem('users');
    this.user=JSON.parse(users)
    console.log('users',JSON.parse(users));
  }

}
