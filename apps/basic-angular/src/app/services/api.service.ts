import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://localhost:3333';
  constructor(private http: HttpClient) { }

  get(url: string) {
    return this.http.get(this.baseUrl + url);
  }

  post<T>(url: string, payload: T) {
    console.log(this.baseUrl + url);
    return this.http.post(this.baseUrl + url, payload )
  }


}
