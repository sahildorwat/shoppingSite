import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShopinglistService } from '../shoppingList.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  editSubscription: Subscription;
  item: Ingredient;
  editMode = false;
  editItemIndex: number;

  constructor(private shoppingListService: ShopinglistService) { }

  ngOnInit() {
    this.editSubscription = this.shoppingListService.startedEditing
                          .subscribe( (index) => {
                              this.editItemIndex = index;
                              this.editMode = true;
                          });
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    this.shoppingListService.addItemHandler(value.name, value.amount);
  }
  ngOnDestroy () {
    this.editSubscription.unsubscribe();
  }
}
