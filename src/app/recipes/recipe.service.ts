import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { EventEmitter, Injectable } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Pizza', 'Margherita', 'https://cdn.loveandlemons.com/wp-content/uploads/2019/09/margherita-pizza.jpg',
      [
        new Ingredient('Tomatoes', 2),
        new Ingredient('Mussarela', 1)
      ]),
    new Recipe('Pudim', 'Leite Condensado', 'https://naminhapanela.com/wp-content/uploads/2019/12/Pudim_leite_condensado-3-1024x685.jpg',
      [
        new Ingredient('Milk', 1)
      ])
  ];

  constructor(private slService: ShoppingListService){}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }
}
