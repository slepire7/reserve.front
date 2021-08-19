import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Countrie } from './model/countries';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  _urlBase: string = 'http://localhost:5000/'
  title = 'covidapp';
  TopTenCountries: Countrie;
  tableTotalConfirmed: boolean = false;
  constructor(public http: HttpClient) {
    this.TopTenCountries = {}
  }


  TakeCountries() {
    this.http.get<any>(`${this._urlBase}DadosIniciais`).subscribe(res => {
      this.TopTenCountries = res
      console.info("Top 10",this.TopTenCountries)
    }, erro => {
      alert('Falha')
    })
  }


}
