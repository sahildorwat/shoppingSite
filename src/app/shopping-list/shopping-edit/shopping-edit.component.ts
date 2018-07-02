import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShopinglistService } from '../shoppingList.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  item: Ingredient;

  constructor(private shoppingListService: ShopinglistService) { }

  ngOnInit() {
  }

  addItemHandler(name, amount) {
    this.shoppingListService.addItemHandler(name, amount);
  }

}
