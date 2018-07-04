import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShopinglistService } from './shoppingList.service';
import { Ingredient } from '../shared/ingredient.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private subscription: Subscription;

  constructor(private shoppinglistService: ShopinglistService) { }

  ngOnInit() {
    this.ingredients = this.shoppinglistService.getIngredients();
    this.subscription =  this.shoppinglistService.ingredientsChanged
                          .subscribe( (ingList: Ingredient[]) => this.ingredients = ingList);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
