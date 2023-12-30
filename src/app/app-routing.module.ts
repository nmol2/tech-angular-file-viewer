import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileViewerSectionComponent } from './modules/file-viewer/components/file-viewer-section/file-viewer-section.component';

const routes: Routes = [
  {
    path: 'view',
    component: FileViewerSectionComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
