import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ICountrie } from './model/countries';
import { CovidService } from './services/covidservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'covidapp';
  dataSource = new MatTableDataSource();
  displayedColumns = [
    "country",
    "countryCode",
    "slug",
    "newConfirmed",
    "totalConfirmed",
    "newDeaths",
    "totalDeaths",
    "newRecovered",
    "totalRecovered",
    "date"];
  constructor(public http: HttpClient, private _covidServ: CovidService) {
  }


  TakeCountries() {
    this._covidServ.GetCovid().subscribe(
      res => {
        this.dataSource.data = res as ICountrie[]
      },
      err => {
        alert(JSON.stringify(err))
      });
  }
}
