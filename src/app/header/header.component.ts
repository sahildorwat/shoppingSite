import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() status = new EventEmitter<boolean>();

  onRecipeHandler() {
    this.status.emit(true);
  }
  onShoppingListHandler() {
    this.status.emit(false);
  }
}
