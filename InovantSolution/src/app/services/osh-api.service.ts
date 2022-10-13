import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OshApiService {

  constructor(private http :HttpClient) { }

  public sendResponse=new Subject<any>();

  

  loginPost(loginData:any){
    return this.http.post("https://admin.eniola.app/api/v1/login",loginData)
  }

}
