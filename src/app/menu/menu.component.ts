import { Component, OnInit } from '@angular/core';
import { Customer, Dish } from '../interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dish: Dish;
  foodSelected = '';

  dishes: Dish[] = [
    {
      name: 'Arroz con pollo',
      ingredients: [{ name: 'Pollo', qty: 1 }, { name: 'Arroz', qty: 2 }]
    },
    {
      name: 'Chanfainita',
      ingredients: [{ name: 'Arroz', qty: 1 }, { name: 'Papa', qty: 3 }, { name: 'Arroz', qty: 1 }, { name: 'Papa', qty: 3 }]
    },
    {
      name: 'Estofado',
      ingredients: [{ name: 'Pollo', qty: 1 }, { name: 'Arroz', qty: 2 }, { name: 'Papa', qty: 5 } ]
    },
    {
      name: 'Pollo a la Brasa',
      ingredients: [{ name: 'Pollo', qty: 1 }, { name: 'Papas', qty: 3 }, { name: 'Aceite', qty: 1 }, { name: 'Tomates', qty: 3 }, { name: 'Lechuga', qty: 3 }]
    }
  ];

  constructor() {
    
  }

  ngOnInit(): void {
  }

  showNameFood(dish: Dish): void{
    this.foodSelected =  dish.name;
  }

}
