import { Component, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';

import validationEngine from 'devextreme/ui/validation_engine';
import notify from 'devextreme/ui/notify';
import ArrayStore from 'devextreme/data/array_store';
import { DxDataGridTypes } from 'devextreme-angular/ui/data-grid';
import { Employee, Service } from './app.service';

interface PositionEditorOptions {
  items: string[];
  searchEnabled: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Service],
})

export class AppComponent {
  @ViewChild('grid', { static: false }) grid!: DxDataGridComponent;

  employees: Employee[];

  employeeStore: ArrayStore;

  formData = {} as Employee;

  isNewRecord = true;

  visible = false;

  positionEditorOptions: PositionEditorOptions;

  notesEditorOptions = { height: 90, maxLength: 200 };

  phoneEditorOptions = {
    mask: '+1 (X00) 000-0000',
    maskRules: { X: /[02-9]/ },
    maskInvalidMessage: 'The phone must have a correct USA phone format',
  };

  labelTemplates = [
    { name: 'name', icon: 'dx-icon-user' },
    { name: 'position', icon: 'dx-icon-info' },
    { name: 'date', icon: 'dx-icon-event' },
    { name: 'address', icon: 'dx-icon-home' },
    { name: 'phone', icon: 'dx-icon-tel' },
    { name: 'email', icon: 'dx-icon-email' },
  ];

  validationGroupName = 'gridForm';

  constructor(service: Service) {
    this.employees = service.getEmployees();

    this.employeeStore = new ArrayStore({
      data: this.employees,
      key: 'ID',
    });

    this.positionEditorOptions = { items: service.getPositions(), searchEnabled: true };
  }

  showPopup = (isNewRecord: boolean, formData: Employee): void => {
    this.formData = formData;
    this.isNewRecord = isNewRecord;
    this.visible = true;
  };

  hidePopup = (): void => {
    this.visible = false;
  };

  confirmChanges = (): void => {
    const result = validationEngine.validateGroup(this.validationGroupName);
    if (!result.isValid) return;

    const operation = this.isNewRecord
      ? this.employeeStore.insert(this.formData)
      : this.employeeStore.update(this.formData.ID, this.formData);

    operation
      .then(() => this.grid.instance.refresh(true))
      .then(() => this.hidePopup())
      .catch(() => {
        notify('An error occurred while saving changes.', 'error', 3000);
      });
  };

  addRow = (): void => {
    this.showPopup(true, {
      ID: 0,
      FirstName: '',
      LastName: '',
      Prefix: '',
      Position: '',
      BirthDate: '',
      HireDate: '',
      Notes: '',
      Address: '',
      Phone: '',
      Email: '',
    });
  };

  editRow = (e: DxDataGridTypes.ColumnButtonClickEvent): void => {
    this.showPopup(false, { ...e.row?.data });
  };
}
