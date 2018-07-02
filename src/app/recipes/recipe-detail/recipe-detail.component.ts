import { Component, OnInit, Input } from '@angular/core';
import {Recipe} from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ShopinglistService } from '../../shopping-list/shoppingList.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;

  constructor(private recipeService: RecipeService,
              private shoppinglistService: ShopinglistService ) { }

  ngOnInit() {
    this.recipeService.selectedRecipe.subscribe((recipe: Recipe) => {
      this.recipe = recipe;
    } );
  }

  addToShoppingList() {
    for (const ingredient of this.recipe.ingredients) {
        this.shoppinglistService.addItemHandler(ingredient.name, ingredient.amount);
    }
    this.shoppinglistService.ingredientsChanged.emit();
  }

}
