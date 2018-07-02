import { Component, OnInit } from '@angular/core';
import { ShopinglistService } from './shoppingList.service';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private shoppinglistService: ShopinglistService) { }

  ngOnInit() {
    this.ingredients = this.shoppinglistService.getIngredients();
    this.shoppinglistService.ingredientsChanged
    .subscribe( (ingList: Ingredient[]) => this.ingredients = ingList);
  }
}
