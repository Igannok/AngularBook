import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { CategoriesComponent } from '../categories.component';

@Component({
  selector: 'category-form',
  standalone: true,
  imports: [MatCardModule,MatInputModule,MatButtonModule,ReactiveFormsModule,CategoriesComponent],
  templateUrl: './form.component.html',
  styles: ``
})
export class CategoryFormComponent {


onSubmit() {
 console.log('Submit', this.categoryForm.value)
}
  constructor(private fb: FormBuilder){};
  categoryForm = this.fb.group({
    id: [null],
    name: ["",[Validators.required,Validators.minLength(3)]],
    description: ["",Validators.required]
  })

  @Output() close = new EventEmitter();

  onBack() {
    this.close.emit();
    }

}
