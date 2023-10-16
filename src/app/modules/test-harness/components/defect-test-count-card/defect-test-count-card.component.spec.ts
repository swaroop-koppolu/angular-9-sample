import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefectTestCountCardComponent } from './defect-test-count-card.component';

describe('DefectTestCountCardComponent', () => {
  let component: DefectTestCountCardComponent;
  let fixture: ComponentFixture<DefectTestCountCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefectTestCountCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefectTestCountCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
