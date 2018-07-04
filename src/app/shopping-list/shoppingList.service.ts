import {Ingredient} from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShopinglistService {
  ingredientsChanged = new Subject<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients = () => this.ingredients.slice();

  addItemHandler(name, amount) {
    this.ingredients.push(new Ingredient(name, amount) );
    this.ingredientsChanged.next(this.ingredients.slice(0));
  }
}
