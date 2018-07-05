import {Ingredient} from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShopinglistService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();


  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients = () => this.ingredients.slice();

  addItemHandler(name, amount) {
    this.ingredients.push(new Ingredient(name, amount) );
    this.ingredientsChanged.next(this.ingredients.slice(0));
  }
  getEditingIngredient(index: number) {
    return this.ingredients[index];
  }

  updateItemHandler(index: number, ingredient: Ingredient) {
    console.log('in update item', ingredient);
    this.ingredients[index] = ingredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient (index: number) {
    if (index) {
      this.ingredients.splice(index, 1);
      this.ingredientsChanged.next(this.ingredients.slice());
    }
  }
}
