import { Component, ViewChild } from '@angular/core';
import { DxFormComponent } from 'devextreme-angular';
import { DxDataGridComponent } from 'devextreme-angular';

import DataSource from 'devextreme/data/data_source';
import ArrayStore from 'devextreme/data/array_store';
import { Employee, Service } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Employee, Service]
})

export class AppComponent {
    @ViewChild("form", {static: false}) form: DxFormComponent;
    @ViewChild("grid", {static: false}) grid: DxDataGridComponent;
    
    key: string = "ID";
    formData: any = {};
    popupMode: string = "Add";
    popupVisible: boolean = false;
    employees: Employee[];
    employeeStore: ArrayStore;
    gridSource: DataSource;

    positionEditorOptions: Object;
    notesEditorOptions: Object;
    phoneEditorOptions: Object;
    labelTemplates: Object;

    constructor(service: Service) {
        this.employees = service.getEmployees();

        this.employeeStore = new ArrayStore({
            data: this.employees,
            key: this.key,
        });

        this.gridSource = new DataSource({
            store: this.employeeStore
        });

        this.positionEditorOptions = { items: service.getPositions(), searchEnabled: true };
        this.notesEditorOptions = { height: 90, maxLength: 200 };
        this.phoneEditorOptions = { 
            mask: '+1 (X00) 000-0000', 
            maskRules: { X: /[02-9]/ },
            maskInvalidMessage: 'The phone must have a correct USA phone format', 
        };

        this.labelTemplates = [
            { name: 'name', icon: 'dx-icon-user' },
            { name: 'position', icon: 'dx-icon-info' },
            { name: 'date', icon: 'dx-icon-event' },
            { name: 'address', icon: 'dx-icon-home' },
            { name: 'phone', icon: 'dx-icon-tel' },
            { name: 'email', icon: 'dx-icon-email' },
        ];

        this.addRow = this.addRow.bind(this);
        this.editRow = this.editRow.bind(this);
        this.confirmChanges = this.confirmChanges.bind(this);
        this.cancelChanges = this.cancelChanges.bind(this);
    }

    showPopup(popupMode, data) {
        this.formData = data;
        this.popupMode = popupMode;
        this.popupVisible = true;
    }

    addRow() {
        this.showPopup("Add", {});
    }

    editRow(e) {
        this.showPopup("Edit", {...e.row.data});
    }

    confirmChanges() {
        let result = this.form.instance.validate();
        if (result.isValid) {
            let gridStore = this.employeeStore;
                
            if (this.popupMode === "Add")
                gridStore.insert(this.formData);
            else if (this.popupMode === "Edit") 
                gridStore.update(this.formData[this.key], this.formData);

            this.grid.instance.refresh(true);
            this.popupVisible = false;
        }
    }

    cancelChanges() {
        this.popupVisible = false;
        this.form.instance.resetValues();
    }
}
