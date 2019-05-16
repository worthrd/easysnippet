import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnippetUploadComponent } from './snippet-upload.component';

describe('SnippetUploadComponent', () => {
  let component: SnippetUploadComponent;
  let fixture: ComponentFixture<SnippetUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnippetUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnippetUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
