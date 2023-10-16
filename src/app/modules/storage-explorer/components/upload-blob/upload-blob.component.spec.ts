import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadBlobComponent } from './upload-blob.component';

describe('UploadBlobComponent', () => {
  let component: UploadBlobComponent;
  let fixture: ComponentFixture<UploadBlobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadBlobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadBlobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
