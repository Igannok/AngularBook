import { Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ObjectGridComponent } from './object-grid/object-grid.component';

export const routes: Routes = [
  {
    path: "categories",
    component: CategoriesComponent
  },
  {
    path: "",
    component: DashboardComponent
  },
  {
    path: "objects",
    component: ObjectGridComponent
  }
];
