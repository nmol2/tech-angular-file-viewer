import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { FileViewerSectionComponent } from './components/file-viewer-section/file-viewer-section.component';



@NgModule({
  declarations: [
    FileViewerSectionComponent
  ],
  imports: [
    CommonModule,
    NgxDocViewerModule,
  ]
})
export class FileViewerModule { }
