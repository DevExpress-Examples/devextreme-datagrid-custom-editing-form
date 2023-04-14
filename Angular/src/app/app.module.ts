import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DxPopupModule } from "devextreme-angular/ui/popup";

import {
    DxDataGridModule,
    DxTemplateModule,
    DxButtonModule,
} from 'devextreme-angular';

import {
    DxSelectBoxModule,
    DxTextAreaModule,
    DxFormModule,
    DxTooltipModule,
} from 'devextreme-angular';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        DxPopupModule,
        DxSelectBoxModule,
        DxTextAreaModule,
        DxFormModule,
        DxTooltipModule,
        DxDataGridModule,
        DxTemplateModule,
        DxButtonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
