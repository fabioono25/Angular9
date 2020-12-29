import { EventEmitter } from '@angular/core';
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {

  ingrediantesChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('flour', 12),
    new Ingredient('eggs', 2),
    new Ingredient('salt', 1)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingrediantesChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]){
    // ingredients.forEach(ingredient => {
    //   this.addIngredient(ingredient);
    // });
    this.ingredients.push(...ingredients); //using the spread operator ES6
    this.ingrediantesChanged.emit(this.ingredients.slice());
  }
}
