import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OshApiService {

  constructor(private http :HttpClient) { }


  

  loginPost(loginData:any){
    return this.http.post("https://admin.eniola.app/api/v1/login",loginData)
  }

}
