import { Category } from './../category.dto';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { CategoriesComponent } from '../categories.component';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'category-form',
  standalone: true,
  imports: [MaterialModule, CategoriesComponent],
  templateUrl: './form.component.html',
  styles: ``
})
export class CategoryFormComponent {


  @Output() close = new EventEmitter();

  @Output() save = new EventEmitter<Category>();

  @Input()
  set category(category: Category) {
    this.categoryForm.setValue(category);
  }


  // constructor(private fb: FormBuilder) { };
  private fb = inject(FormBuilder);
  categoryForm = this.fb.group({
    id: [null],
    name: ["", [Validators.required, Validators.minLength(3)]],
    description: ["", Validators.required]
  })

  onBack() {
    this.close.emit();
  }

  onSubmit() {
    console.log('Submit clicked on form. There are the values:', this.categoryForm.value)
    this.save.emit(this.categoryForm.value as Category);
  }

}
