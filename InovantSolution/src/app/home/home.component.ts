import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OshApiService } from "../services/osh-api.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  asterk = "*";
  userDetails: any;
  constructor(private oshServ: OshApiService,private route:Router) { }

  loginDetails = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  ngOnInit(): void {

  }



  doLogin() {
    this.oshServ.loginPost(this.loginDetails.value).subscribe(res => {
      this.userDetails=res;
      console.log(this.userDetails.data);
      this.route.navigate(['/profile'])
      localStorage.setItem('users',JSON.stringify(this.userDetails.data))
    }, err => {
      alert("Something Went Wrong...Please try Sometime Later...")
      console.log(err);
    })

  }

}
