import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';

import validationEngine from 'devextreme/ui/validation_engine';

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
  styleUrls: ['./app.component.scss'],
  providers: [Employee, Service],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})

export class AppComponent {
  @ViewChild('grid', { static: false }) grid!: DxDataGridComponent;

  employees: Employee[];

  employeeStore: ArrayStore;

  formData: Employee = {} as Employee;

  isNewRecord = true;

  visible = false;

  positionEditorOptions: PositionEditorOptions;

  readonly notesEditorOptions = { height: 90, maxLength: 200 };

  readonly phoneEditorOptions = {
    mask: '+1 (X00) 000-0000',
    maskRules: { X: /[02-9]/ },
    maskInvalidMessage: 'The phone must have a correct USA phone format',
  };

  readonly labelTemplates = [
    { name: 'name', icon: 'dx-icon-user' },
    { name: 'position', icon: 'dx-icon-info' },
    { name: 'date', icon: 'dx-icon-event' },
    { name: 'address', icon: 'dx-icon-home' },
    { name: 'phone', icon: 'dx-icon-tel' },
    { name: 'email', icon: 'dx-icon-email' },
  ];

  readonly validationGroupName = 'gridForm';

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

    if (this.isNewRecord) {
      this.employeeStore.insert(this.formData).catch(() => {});
    } else {
      this.employeeStore.update(this.formData.ID, this.formData).catch(() => {});
    }

    this.grid.instance.refresh(true).catch(() => {});
    this.hidePopup();
  };

  addRow = (): void => {
    this.showPopup(true, {} as Employee);
  };

  editRow = (e: DxDataGridTypes.ColumnButtonClickEvent): void => {
    this.showPopup(false, { ...e.row?.data });
  };
}
