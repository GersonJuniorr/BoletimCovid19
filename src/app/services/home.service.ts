import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  URL_API = 'https://covid-api.mmediagroup.fr/v1'
  constructor(private http: HttpClient) {
    this.getCasesBrazil();
    this.getVaccinesBrazil();
  }

  getCasesBrazil() {
    return this.http.get(`${this.URL_API}/cases?country=Brazil`);
  }

  getVaccinesBrazil() {
    return this.http.get(`${this.URL_API}/vaccines?country=Brazil`)
  }
}
