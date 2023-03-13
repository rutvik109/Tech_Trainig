import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';

const mat = [MatToolbarModule, MatIconModule, MatButtonModule, MatGridListModule, MatDividerModule, MatCardModule]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    mat
  ]
})
export class MatModule { }
