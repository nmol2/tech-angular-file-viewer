import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileViewerSectionComponent } from './file-viewer-section.component';

describe('FileViewerSectionComponent', () => {
  let component: FileViewerSectionComponent;
  let fixture: ComponentFixture<FileViewerSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FileViewerSectionComponent]
    });
    fixture = TestBed.createComponent(FileViewerSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
