import { Observable } from 'rxjs';
import { PostdataModel } from './../../Models/postdata.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private httpClient: HttpClient) { }

  postData(data: PostdataModel): Observable<any> {
    const url = 'https://anpan.pythonanywhere.com/api/posts/';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post(url, data, { headers });
  }

  updateData(data: PostdataModel, id: number): Observable<any> {
    console.log(data);
    const url = `https://anpan.pythonanywhere.com/api/posts/${id}/`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.put(url, data, { headers });
  }
}
