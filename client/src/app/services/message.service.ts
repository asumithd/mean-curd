import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
 
@Injectable()
export class MessageService {
  URL_API = 'http://localhost:4000/api/sendmail'
 
  constructor(private http: HttpClient) {}
 
  sendMessage(body) {
    return this.http.post(this.URL_API, body);
  }
}