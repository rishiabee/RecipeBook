import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Component({
  selector: 'rishiabee-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients = [
    new Ingredient('Bread', 1),
    new Ingredient('Fishi', 1),
    new Ingredient('Apples', 10)
  ];
  constructor() { }

  ngOnInit() {
  }

}
