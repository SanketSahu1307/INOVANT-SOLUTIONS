import { Component, OnInit } from '@angular/core';
import { OshApiService } from '../services/osh-api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:any
  constructor(private oshServ:OshApiService) { }

  ngOnInit() {
   this.getDetail();
  }

  getDetail(){
    
    this.oshServ.sendResponse.subscribe(res=>{
      this.user=res
      console.log(this.user); 
      
    }),err=>{
      console.log(err);
      
    }
  }

}
