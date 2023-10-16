import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelTrainingImageUploadComponent } from './model-training-image-upload.component';

describe('ModelTrainingImageUploadComponent', () => {
  let component: ModelTrainingImageUploadComponent;
  let fixture: ComponentFixture<ModelTrainingImageUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelTrainingImageUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelTrainingImageUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
