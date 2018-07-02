import {Ingredient} from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
export class ShopinglistService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
  getIngredients = () => this.ingredients.slice();

  addItemHandler(name, amount) {
    this.ingredients.push(new Ingredient(name, amount) );
    this.ingredientsChanged.emit(this.ingredients.slice(0));
  }
}
