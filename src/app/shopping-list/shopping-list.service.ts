import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {

  // it's a better practice using Subject, instead of EventEmitter in this case
  //ingrediantesChanged = new EventEmitter<Ingredient[]>();
  ingrediantesChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('flour', 12),
    new Ingredient('eggs', 2),
    new Ingredient('salt', 1)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    //this.ingrediantesChanged.emit(this.ingredients.slice());
    this.ingrediantesChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]){
    // ingredients.forEach(ingredient => {
    //   this.addIngredient(ingredient);
    // });
    this.ingredients.push(...ingredients); //using the spread operator ES6
    //this.ingrediantesChanged.emit(this.ingredients.slice());
    this.ingrediantesChanged.next(this.ingredients.slice());
  }
}
