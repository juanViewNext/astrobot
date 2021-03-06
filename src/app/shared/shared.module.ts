import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './widgets/card.component';
import { DataTagComponent } from './widgets/data-tag/data-tag.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [CardComponent, DataTagComponent],
  exports: [CardComponent,FormsModule,DataTagComponent]
})
export class SharedModule { }
