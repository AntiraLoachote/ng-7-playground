import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { PostdataModel } from 'src/app/Models/postdata.model';

@Injectable({
  providedIn: 'root'
})
export class GetService {

  constructor(private httpClient: HttpClient) { }
  getData(): Observable<Array<PostdataModel>> {
    const url = 'https://anpan.pythonanywhere.com/api/posts/';
    return this.httpClient.get<Array<PostdataModel>>(url);
  }

  getDataById(id: number): Observable<PostdataModel>{
    const url = `https://anpan.pythonanywhere.com/api/posts/${id}`;
    return this.httpClient.get<PostdataModel>(url);
  }
}
