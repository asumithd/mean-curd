import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Img } from '../models/img';
@Injectable({
  providedIn: 'root'
})
export class ImgService {
  URL_API = 'http://localhost:4000/api/imgs'
  selectedImg: Img = {
    img:''
  };
  img: Img[];

  constructor(private http: HttpClient) { }

  getImg() {
    return this.http.get<Img[]>(this.URL_API);
  }
  createImg(img: Img) {
    return this.http.post(this.URL_API, img);
  }
  deleteImg(id: string) {
    return this.http.delete(this.URL_API + '/' + id);
  }
  editImg(img: Img) {
    return this.http.put(this.URL_API + '/' + img._id , img);
  }
  bulk(img: Img) {
    return this.http.post(this.URL_API + '/test', img);
  }
}