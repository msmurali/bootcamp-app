import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class apiService {
  private _url: string = 'http://localhost:8080/register';
  constructor(private http: HttpClient) {}

  register(data: any) {
    this.http.post(this._url, data).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }
}
