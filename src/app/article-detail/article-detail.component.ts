import { Component, Inject } from '@angular/core';
import { MaterialModule } from '../material.module';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_DATE_LOCALE , DateAdapter, NativeDateAdapter,MAT_DATE_FORMATS} from '@angular/material/core';
import { MatDatepickerIntl, MatDatepickerModule } from '@angular/material/datepicker';
import { provideMomentDateAdapter } from '@angular/material-moment-adapter';
import { MatFormFieldModule } from '@angular/material/form-field';



export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};



@Component({
  selector: 'app-article-detail',
  standalone: true,
  imports: [MaterialModule,ReactiveFormsModule,MatToolbarModule,MatTooltipModule,MatCheckboxModule,MatDatepickerModule,MatFormFieldModule],
  templateUrl: './article-detail.component.html',
  styleUrl: './article-detail.component.css',
  providers:

  [
    provideMomentDateAdapter(MY_FORMATS),
  ],

})
export class ArticleDetailComponent {


  articleForm: FormGroup;
  isDisabled: boolean = true;

  constructor(
    private _adapter: DateAdapter<any>,
    private _intl: MatDatepickerIntl,
    @Inject(MAT_DATE_LOCALE) private _locale: string,
  ){

  }

  toggleEditMode(){
    this.isDisabled = !this.isDisabled;
  }

  toggleDisabledMode() {
    throw new Error('Method not implemented.');
    }


}
