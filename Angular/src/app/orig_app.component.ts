import { Component, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';

import validationEngine from 'devextreme/ui/validation_engine';

import ArrayStore from 'devextreme/data/array_store';
import { Employee, Service } from './app.service';

type PositionEditorOptions = {
    items: string[], 
    searchEnabled: boolean
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [Employee, Service]
})

export class AppComponent {
    @ViewChild("grid", {static: false}) grid: DxDataGridComponent;

    employees: Employee[];
    employeeStore: ArrayStore;

    formData: Employee[];
    isNewRecord = true;
    visible = false;

    positionEditorOptions: PositionEditorOptions;
    notesEditorOptions = { height: 90, maxLength: 200 };
    phoneEditorOptions = { 
        mask: "+1 (X00) 000-0000", 
        maskRules: { X: /[02-9]/ },
        maskInvalidMessage: "The phone must have a correct USA phone format", 
    };

    labelTemplates = [
        { name: "name", icon: "dx-icon-user" },
        { name: "position", icon: "dx-icon-info" },
        { name: "date", icon: "dx-icon-event" },
        { name: "address", icon: "dx-icon-home" },
        { name: "phone", icon: "dx-icon-tel" },
        { name: "email", icon: "dx-icon-email" },
    ];

    get validationGroupName() { 
        return "gridForm"; 
    }

    showPopup = (isNewRecord, formData) => {
        this.formData = formData;
        this.isNewRecord = isNewRecord;
        this.visible = true;
    };

    hidePopup = () => { 
        this.visible = false;
    };

    confirmChanges = () => {
        const result = validationEngine.validateGroup(this.validationGroupName);
     
        if (!result.isValid)
            return;

        if (this.isNewRecord)
            this.employeeStore.insert(this.formData); 
        else 
            this.employeeStore.update(this.formData["ID"], this.formData);

        this.grid.instance.refresh(true);
        this.hidePopup();
    };

    addRow = () => {
        this.showPopup(true, {});
    };

    editRow = (e) => {
        this.showPopup(false, {...e.row.data});
    };

    constructor(service: Service) {
        this.employees = service.getEmployees();

        this.employeeStore = new ArrayStore({
            data: this.employees,
            key: "ID",
        });  

        this.positionEditorOptions = { items: service.getPositions(), searchEnabled: true };
    }
}
