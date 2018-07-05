import { NgModule } from '@angular/core';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ ShoppingEditComponent,
              ShoppingListComponent],
  imports: [ CommonModule,
             SharedModule
             ]
})

export class ShoppingListModule {}
