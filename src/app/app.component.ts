import { Component } from '@angular/core';
import {CountryServiceService } from './service/country-service.service';
import { Country } from './model/Country';
import { State } from './model/State';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CountryServiceService]
})
export class AppComponent {
  title = 'selectEample';

  selectedCountry: Country = new Country(0, 'India');
  countries: Country[];
  states: State[];
  constructor(private _countryService: CountryServiceService) {

    this.countries = this._countryService.getCountries();
    //this.states = this._countryService.getStates();
  }
  onSelect(countryid) {
    this.states = this._countryService.getStates();//.filter((item) => Number(item.countryid) === Number(countryid));
    //console.log(countryid,  this.states);
  }

}
