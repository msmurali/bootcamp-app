import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class apiService {
  private _url: string = 'http://localhost:80/register';
  constructor(private http: HttpClient) {}

  register(data: any) {
    return this.http.post(this._url, data);
  }
}
