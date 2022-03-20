import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServiceBase {
  constructor(public _http: HttpClient) { }
  protected get = (api: string, params?: HttpParams): Observable<any> => {
    return this._http.get(api, {
      headers: {
        'Content-Type': 'application/json'
      },
      params: params
    })
  }
}
