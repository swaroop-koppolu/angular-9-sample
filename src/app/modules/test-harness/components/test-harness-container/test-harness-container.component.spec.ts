import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestHarnessContainerComponent } from './test-harness-container.component';

describe('TestHarnessContainerComponent', () => {
  let component: TestHarnessContainerComponent;
  let fixture: ComponentFixture<TestHarnessContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestHarnessContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHarnessContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
