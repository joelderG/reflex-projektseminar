import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueSelectComponent } from './value-select.component';

describe('ValueSelectComponent', () => {
  let component: ValueSelectComponent;
  let fixture: ComponentFixture<ValueSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValueSelectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValueSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
