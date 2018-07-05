import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { RecipeService } from "../recipes/recipe.service";
import { Response } from '@angular/http';
import 'rxjs/Rx';
import { Recipe } from '../recipes/recipe.model'
@Injectable()
export class DataStorageService {

  constructor (private http: Http,
                private recipeService: RecipeService) {}

  storeRecipes () {
    return this.http.put('https://recipe-book-c162a.firebaseio.com/recipes.json', this.recipeService.getRecipes());
  }

  fetchRecipes () {
    return this.http.get('https://recipe-book-c162a.firebaseio.com/recipes.json').map(
      (response: Response) => { const recipes = response.json();
                for ( const recipe of recipes ) {
                  if ( !recipe['ingredients']) {
                    recipe['ingredients'] = [];
                  }
                }
                return recipes;
            }
      ).subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
         }
    );
  }

}
