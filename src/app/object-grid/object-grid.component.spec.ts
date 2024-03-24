import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectGridComponent } from './object-grid.component';

describe('ObjectGridComponent', () => {
  let component: ObjectGridComponent;
  let fixture: ComponentFixture<ObjectGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObjectGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObjectGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
