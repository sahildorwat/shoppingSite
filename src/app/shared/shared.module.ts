import { NgModule } from '@angular/core';
import { DropdownDirective } from './dropdown/dropdown.directive';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DropdownDirective],
  exports: [
    CommonModule,
    DropdownDirective,
    FormsModule
  ]
})

export class SharedModule {}
