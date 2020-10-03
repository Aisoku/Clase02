import { Component, OnInit } from '@angular/core';
import { Country } from './../interface/country.interfaces';
import * as countries from './../../assets/countries.json';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  selected: Country;

  constructor() { 
    this.selected = countries[10];
    console.log(this.selected);
  }

  ngOnInit(): void {
  }

}
