import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import {Subject} from 'rxjs/Subject';
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [new Ingredient('sauce', 2), new Ingredient('potato', 5)]
    ),
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [new Ingredient('chicken', 2), new Ingredient('potato', 5)]
    )
  ];

  getRecipes = () => this.recipes.slice();

  getRecipe = (index) => this.recipes[index];

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  addRecipe ( newRecipe: Recipe) {
    this.recipes.push(newRecipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe (index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
