import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Dish } from '../interface';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.scss']
})

export class DishComponent implements OnInit {

  private _name: string;
  private _totalIngredients: number;


  @Input() set dish(value: Dish) {
    this._name = this.generateName(value.name);
    this._totalIngredients = value.ingredients.length;
  }

  get name(): string {
    return this._name;
  }

  get totalIngredients(): number {
    return this._totalIngredients;
  }

  constructor() { }
  ngOnInit(): void { }

  generateName(name: string): string {
    return `Nombre del plato: ${name}`;
  }

  @Output() showFood: EventEmitter<String> = new EventEmitter<String>();

  onShowFood() {
    this.showFood.emit();
  }

}
