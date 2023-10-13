import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NetworkCallService {
  private baseUrl = "https://bandicoot-battledress.cyclic.app/";

  private static get header(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
    });
  };

  constructor(private http: HttpClient) {

  }

  public get<T>(url: string) {
    return this.http.get<T>(this.baseUrl + url, { headers: NetworkCallService.header });
  }

  public post<T>(url: string, requestBody?: any) {
    return this.http.post<T>(this.baseUrl + url, requestBody, { headers: NetworkCallService.header },)
  }

  public delete<T>(url: string) {
    return this.http.delete<T>(this.baseUrl + url, { headers: NetworkCallService.header },)
  }


}
