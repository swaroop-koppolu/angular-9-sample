import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JointBarTypeSelectionComponent } from './joint-bar-type-selection.component';

describe('JointBarTypeSelectionComponent', () => {
  let component: JointBarTypeSelectionComponent;
  let fixture: ComponentFixture<JointBarTypeSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JointBarTypeSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JointBarTypeSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
