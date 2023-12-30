import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileViewerModule } from './modules/file-viewer/file-viewer.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FileViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
