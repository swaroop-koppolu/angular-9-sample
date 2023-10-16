import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryRunsComponent } from './history-runs.component';

describe('HistoryRunsComponent', () => {
  let component: HistoryRunsComponent;
  let fixture: ComponentFixture<HistoryRunsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryRunsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryRunsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
