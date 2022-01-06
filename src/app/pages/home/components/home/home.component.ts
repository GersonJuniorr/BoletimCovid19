import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  casos: any;
  vacinas: any

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.showCasesBrazil();
    this.showVaccinesBrazil();
  }

  showCasesBrazil() {
    this.homeService.getCasesBrazil().subscribe(cases => (this.casos = cases))
  }

  showVaccinesBrazil() {
    this.homeService.getVaccinesBrazil().subscribe(cases => (this.vacinas = cases))
  }

  ola() {
    console.log(this.vacinas)
  }
}
