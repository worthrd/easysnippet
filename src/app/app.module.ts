import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScriptItemComponent } from './script-item/script-item.component';
import { SnippetUploadComponent } from './snippet-upload/snippet-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    ScriptItemComponent,
    SnippetUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
