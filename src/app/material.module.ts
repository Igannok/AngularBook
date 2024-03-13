import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSortModule } from '@angular/material/sort';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule, MatPaginatorModule, MatSortModule, MatCardModule, MatIconModule, MatInputModule, MatButtonModule, ReactiveFormsModule
  ],
  exports: [CommonModule,
    MatTableModule, MatPaginatorModule, MatSortModule, MatCardModule, MatIconModule, MatInputModule, MatButtonModule, ReactiveFormsModule

  ]
})
export class MaterialModule { }
