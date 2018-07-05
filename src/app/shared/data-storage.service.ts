import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { RecipeService } from "../recipes/recipe.service";

@Injectable()
export class DataStorageService {

  constructor (private http: Http,
                private recipeService: RecipeService) {}

  saveData () {
    return this.http.put('https://recipe-book-c162a.firebaseio.com/recipes.json', this.recipeService.getRecipes());
  }

}
