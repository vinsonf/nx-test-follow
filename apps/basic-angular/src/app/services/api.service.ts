import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public baseUrl = 'http://localhost:3333';
  constructor(private http: HttpClient) { }

  get<T>(url: string) {
    return this.http.get<T>(this.baseUrl + url);
  }

  post<T>(url: string, payload: T) {
    console.log(this.baseUrl + url);
    return this.http.post(this.baseUrl + url, payload )
  }


}
