import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestBedGlobalValuesComponent } from './test-bed-global-values.component';

describe('TestBedGlobalValuesComponent', () => {
  let component: TestBedGlobalValuesComponent;
  let fixture: ComponentFixture<TestBedGlobalValuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestBedGlobalValuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestBedGlobalValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
