import { Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ObjectGridComponent } from './object-grid/object-grid.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';

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
  },  {
    path: "articledetail",
    component: ArticleDetailComponent
  }
];
