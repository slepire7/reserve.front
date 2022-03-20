import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ICountrie } from "../model/countries";
import { ServiceBase } from "./service-base";
@Injectable({
  providedIn: 'root'
})
export class CovidService extends ServiceBase {
  constructor(_http: HttpClient) {
    super(_http)
  }


  public GetCovid = () => this._http.get("http://localhost:5000/Covid/DadosIniciais");
}
