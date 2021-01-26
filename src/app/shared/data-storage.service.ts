import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";

@Injectable({providedIn: 'root'}) // I need this because I'll get another service injecteded
export class DataStorageService {
  constructor(private http: HttpClient, private recipesService: RecipeService){}

  storeRecipes() {
    const recipes = this.recipesService.getRecipes();
    this.http.put('https://ng-course-recipe-book-f9e5b-default-rtdb.europe-west1.firebasedatabase.app/recipes.json', recipes)
      .subscribe(response => {
        console.log(response);
      });
  }

  fetchRecipes() {
    this.http.get<Recipe[]>('https://ng-course-recipe-book-f9e5b-default-rtdb.europe-west1.firebasedatabase.app/recipes.json')
    .subscribe(recipes => {
      this.recipesService.setRecipes(recipes);
    })
  }
}
