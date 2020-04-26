import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output()
  recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Pasta 1', 'Just a pasta 1', 'https://www.thespruceeats.com/thmb/N-MHztL8s2Ld1L1ivCXclMYOor4=/2000x1500/filters:fill(auto,1)/GettyImages-885397466-5c0cc0634cedfd00012758a7.jpg'),
    new Recipe('Pasta 2', 'Just a pasta 2', 'https://www.foodiecrush.com/wp-content/uploads/2019/07/Pomodoro-Sauce-foodiecrush.com-015-683x1024.jpg'),
    new Recipe('Pasta 3', 'Just a pasta 3', 'https://www.gimmesomeoven.com/wp-content/uploads/2018/02/Creamy-Rose%CC%81-Pasta-with-Roasted-Tomatoes-1-1100x1650.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
