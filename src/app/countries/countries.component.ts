import { DatePipe, TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Country } from '@myApp/models';
import * as countries from './../../assets/countries.json';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
  providers: [TitleCasePipe]
})
export class CountriesComponent implements OnInit {

  selected: Country;
  alpha3Code: string;

  constructor(private titleCasePipe: TitleCasePipe) { 
    this.selected = countries[10];
    console.log(this.selected);
  }

  ngOnInit(): void {
  }
  send(value: string) : void{
    console.log("Antes ::: ", value);
    value = this.titleCasePipe.transform(value);
    console.log("Despues ::: ", value);

  }

}
