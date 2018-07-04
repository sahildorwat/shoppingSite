import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShopinglistService } from '../shoppingList.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  item: Ingredient;

  constructor(private shoppingListService: ShopinglistService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    this.shoppingListService.addItemHandler(value.name, value.amount);
  }

}
