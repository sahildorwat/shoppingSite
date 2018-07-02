import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';
import { ShopinglistService } from '../../shopping-list/shoppingList.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  constructor(private shoppinglistService: ShopinglistService,
              private route: ActivatedRoute,
              private recipeService: RecipeService,
              private router: Router ) { }

  ngOnInit() {
    this.route.params.
        subscribe((params: Params) => {
          this.id = +params['id'];
          this.recipe = this.recipeService.getRecipe(this.id);
        });
  }
  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  addToShoppingList() {
    for (const ingredient of this.recipe.ingredients) {
        this.shoppinglistService.addItemHandler(ingredient.name, ingredient.amount);
    }
    this.shoppinglistService.ingredientsChanged.emit();
  }

}
