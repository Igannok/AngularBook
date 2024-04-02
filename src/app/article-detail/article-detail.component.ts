import { AfterViewInit, Component, Inject, ViewChild } from '@angular/core';
import { MaterialModule } from '../material.module';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_DATE_LOCALE, DateAdapter, NativeDateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatDatepickerIntl, MatDatepickerModule } from '@angular/material/datepicker';
import { provideMomentDateAdapter } from '@angular/material-moment-adapter';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';

export interface DummyCustomer {
  name: string;
  soldDate: Date;
}

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
  imports: [MaterialModule, ReactiveFormsModule, MatToolbarModule, MatTooltipModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule, MatTableModule, MatSortModule],
  templateUrl: './article-detail.component.html',
  styleUrl: './article-detail.component.css',
  providers:

    [
      provideMomentDateAdapter(MY_FORMATS),
    ],

})
export class ArticleDetailComponent implements AfterViewInit {

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<DummyCustomer>;
  //todo: fill with actual data
  dataSource = new MatTableDataSource<DummyCustomer>([
    {
      name: 'Customer 1',
      soldDate: new Date()
    }
  ])
  displayedColumns: string[] = ['name','solddate']

  articleForm: FormGroup;
  isDisabled: boolean = true;
  isDisabledName: boolean = true;
  isDisabledHeight: boolean = true;
  isDisabledType: boolean = true;
  isDisabledWidth: boolean = true;
  isDisabledDiameter: boolean = true;
  isDisabledDisplayStatus: boolean = true;
  isDisabledInStoreTime: boolean = true;
  isDisabledDepotBoolean: boolean = true;
  isDisabledSoldBoolean: boolean = true;
  isDisabledOtherStoreBoolean: boolean = true;
  isDisabledDatePicker: boolean = true;
  isDisabledSaveButton: boolean = true;
  isDisabledDescription: boolean = true;


  constructor(
    private _adapter: DateAdapter<any>,
    private _intl: MatDatepickerIntl,
    @Inject(MAT_DATE_LOCALE) private _locale: string,
  ) { }



  ngAfterViewInit(): void {
    this.onLoad();
    //todo 1 function to rule them all will be loaded here
  }


  onLoad(): void {
    this.table.dataSource = this.dataSource;
    this.dataSource.sort = this.sort;

  }

  toggleEditMode() {
    this.isDisabledDatePicker = !this.isDisabledDatePicker;
    this.isDisabledName = !this.isDisabledName;
    this.isDisabledType = !this.isDisabledType;
    this.isDisabledHeight = !this.isDisabledHeight;
    this.isDisabledWidth = !this.isDisabledWidth;
    this.isDisabledDiameter = !this.isDisabledDiameter;
    this.isDisabledDisplayStatus = !this.isDisabledDisplayStatus;
    this.isDisabledDepotBoolean = !this.isDisabledDepotBoolean;
    this.isDisabledSoldBoolean = !this.isDisabledSoldBoolean;
    this.isDisabledOtherStoreBoolean = !this.isDisabledOtherStoreBoolean;
    this.isDisabledSaveButton = !this.isDisabledSaveButton;
    this.isDisabledDescription = !this.isDisabledDescription;
  }

  toggleDisabledMode() {
    throw new Error('Method not implemented.');
  }


}
