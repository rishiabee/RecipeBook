import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'rishiabee-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes = [
    new Recipe('Apple Tart', 'An Apple Tart recipe',
      'https://cdn.pixabay.com/photo/2015/12/01/08/13/apple-pie-1071747_960_720.jpg'),
    new Recipe('Chicken Burger', 'A chicken burger recipe',
      'https://cdn.pixabay.com/photo/2016/04/17/12/10/american-1334633_960_720.jpg'),
    new Recipe('Grilled Salmon', 'A grilled salmon recipe',
      'https://cdn.pixabay.com/photo/2016/03/05/20/07/salmon-1238662_960_720.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
