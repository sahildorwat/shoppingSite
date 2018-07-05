import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
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
  @ViewChild('f') editForm: NgForm;
  editSubscription: Subscription;
  item: Ingredient;
  editMode = false;
  editItemIndex: number;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShopinglistService) { }

  ngOnInit() {
    this.editSubscription = this.shoppingListService.startedEditing
                          .subscribe( (index) => {
                            console.log(index);
                              this.editItemIndex = index;
                              this.editMode = true;
                              this.editedItem = this.shoppingListService.getEditingIngredient(index);
                              this.editForm.setValue({
                                name: this.editedItem.name,
                                amount: this.editedItem.amount
                              });
                          });
  }

  onClear() {
    this.editForm.reset();
    this.editMode = false;

  }

  onDelete() {
    console.log('sending index of ', this.editItemIndex, 'to service');
    this.shoppingListService.deleteIngredient(this.editItemIndex);
    this.editForm.reset();
    this.editMode = false;
  }
  onSubmit(form: NgForm) {
    const value = form.value;
    if ( this.editMode) {
      this.editedItem.name = value.name;
      this.editedItem.amount = value.amount;
      this.shoppingListService.updateItemHandler(this.editItemIndex, this.editedItem);
    } else {
      this.shoppingListService.addItemHandler(value.name, value.amount);
    }
    this.editForm.reset();
    this.editMode = false;
  }
  ngOnDestroy () {
    this.editSubscription.unsubscribe();
  }
}
