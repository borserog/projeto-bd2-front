import { Injectable } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BntService {

  readonly URL = 'http://localhost:3000/';

  constructor(
    private browser: BrowserModule,
    private http: HttpClient
  ) { }

  getData(table: string) {
    return this.http.get(this.URL + table);
  }
}
