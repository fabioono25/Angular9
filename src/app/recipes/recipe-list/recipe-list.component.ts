import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Pizza', 'Margherita', 'https://cdn.loveandlemons.com/wp-content/uploads/2019/09/margherita-pizza.jpg'),
    new Recipe('Pudim', 'Leite Condensado', 'https://naminhapanela.com/wp-content/uploads/2019/12/Pudim_leite_condensado-3-1024x685.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
