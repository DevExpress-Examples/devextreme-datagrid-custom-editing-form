import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DxDataGridModule } from "devextreme-angular/ui/data-grid";
import { DxPopupModule } from "devextreme-angular/ui/popup";
import { DxFormModule } from "devextreme-angular/ui/form";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DxDataGridModule,
    DxPopupModule,
    DxFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
