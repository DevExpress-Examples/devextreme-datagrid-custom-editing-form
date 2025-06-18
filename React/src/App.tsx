import React, {
  useCallback, useState, useMemo, useRef,
} from 'react';

import 'devextreme/dist/css/dx.light.css';
import './App.css';

import DataGrid, {
  Column, Editing, Button, Toolbar, ToolbarItem as DataGridToolbarItem, type DataGridRef,
} from 'devextreme-react/data-grid';
import Popup, { ToolbarItem } from 'devextreme-react/popup';
import Form, { SimpleItem, GroupItem, Label } from 'devextreme-react/form';
import validationEngine from 'devextreme/ui/validation_engine';
import AddRowButton from 'devextreme-react/button';
import notify from 'devextreme/ui/notify';
import { DataSource, ArrayStore } from 'devextreme-react/common/data';
import LabelTemplate from './LabelTemplate';
import LabelNotesTemplate from './LabelNotesTemplate';
import 'devextreme-react/text-area';

import { employees, type Employee } from './data';

import {
  validationRules,
  positionEditorOptions,
  notesEditorOptions,
  phoneEditorOptions,
} from './ValidationRulesAndEditorOptions';

interface PopupState {
  isNewRecord?: boolean;
  formData?: Employee;
  visible?: boolean;
}

const employeeStore = new ArrayStore({
  data: employees,
  key: 'ID',
});

const employessDataSource = new DataSource({
  store: employeeStore,
});

const validationGroupName = 'gridForm';

function App(): JSX.Element {
  const gridRef = useRef<DataGridRef>(null);
  const [{ isNewRecord, formData, visible }, setPopupState] = useState<PopupState>({});

  const showPopup = useCallback((isNew: boolean, data: Employee) => {
    setPopupState({ isNewRecord: isNew, formData: data, visible: true });
  }, []);

  const hidePopup = useCallback(() => {
    setPopupState({ visible: false });
  }, []);

  const confirmChanges = useCallback(() => {
    const result = validationEngine.validateGroup(validationGroupName);

    if (!result.isValid || !formData) return;

    const operation = isNewRecord
      ? employeeStore.insert(formData)
      : employeeStore.update(formData?.ID, formData);

    operation
      .then(() => gridRef?.current?.instance().refresh(true))
      .then(() => hidePopup())
      .catch(() => {
        notify('An error occurred while saving changes.', 'error', 3000);
      });
  }, [isNewRecord, formData, hidePopup]);

  const confirmBtnOptions = useMemo(() => ({
    text: 'Confirm',
    type: 'success',
    onClick: confirmChanges,
  }), [confirmChanges]);

  const cancelBtnOptions = useMemo(() => ({
    text: 'Cancel',
    onClick: hidePopup,
  }), [hidePopup]);

  const editRow = useCallback((e: any) => {
    showPopup(false, { ...e.row.data });
  }, [showPopup]);

  const addRow = useCallback(() => {
    showPopup(true, {
      ID: Math.max(employees.length - 1, employees[employees.length - 1].ID + 1),
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
  }, [showPopup]);

  return (
    <React.Fragment>
      <DataGrid
        dataSource={employessDataSource}
        ref={gridRef}
        showBorders={true}
        repaintChangesOnly={true}
      >
        <Editing
          allowUpdating={true}
          allowAdding={true}
          allowDeleting={true}
          useIcons={true}
          mode="popup"
        />
        <Column dataField="FirstName" dataType="string" />
        <Column dataField="LastName" dataType="string" />
        <Column dataField="BirthDate" dataType="date" />
        <Column dataField="Position" width={170} dataType="string" />
        <Column dataField="HireDate" dataType="date" />
        <Column dataField="Address" dataType="string" />
        <Column type="buttons">
          <Button name="edit" onClick={editRow} />
          <Button name="delete" />
        </Column>
        <Toolbar>
          <DataGridToolbarItem location="after">
            <AddRowButton
              icon="plus"
              onClick={addRow} />
          </DataGridToolbarItem>
        </Toolbar>
      </DataGrid>
      {visible ? (
        <Popup
          title={isNewRecord ? 'Add' : 'Edit'}
          hideOnOutsideClick={true}
          visible={true}
          height="auto"
          onHiding={hidePopup}
        >
          <ToolbarItem
            widget="dxButton"
            location="after"
            toolbar="bottom"
            options={confirmBtnOptions}
          />
          <ToolbarItem
            widget="dxButton"
            location="after"
            toolbar="bottom"
            options={cancelBtnOptions}
          />

          <Form
            validationGroup={validationGroupName}
            formData={formData}
          >
            <GroupItem colCount={2}>
              <SimpleItem dataField="FirstName" validationRules={validationRules.firstName}>
                <Label render={LabelTemplate('user')} />
              </SimpleItem>
              <SimpleItem dataField="Position" editorType="dxSelectBox" editorOptions={positionEditorOptions}>
                <Label render={LabelTemplate('info')} />
              </SimpleItem>
              <SimpleItem dataField="LastName" validationRules={validationRules.lastName}>
                <Label render={LabelTemplate('user')} />
              </SimpleItem>
              <SimpleItem dataField="Address">
                <Label render={LabelTemplate('home')} />
              </SimpleItem>
              <SimpleItem dataField="BirthDate" editorType="dxDateBox" validationRules={validationRules.birthDate}>
                <Label render={LabelTemplate('event')} />
              </SimpleItem>
              <SimpleItem dataField="HireDate" editorType="dxDateBox">
                <Label render={LabelTemplate('event')} />
              </SimpleItem>
              <SimpleItem dataField="Notes" colSpan={2} editorType="dxTextArea" editorOptions={notesEditorOptions}>
                <Label render={LabelNotesTemplate} />
              </SimpleItem>
              <SimpleItem dataField="Phone" editorOptions={phoneEditorOptions} validationRules={validationRules.phone}>
                <Label render={LabelTemplate('tel')} />
              </SimpleItem>
              <SimpleItem dataField="Email" validationRules={validationRules.email}>
                <Label render={LabelTemplate('email')} />
              </SimpleItem>
            </GroupItem>
          </Form>
        </Popup>
      ) : null}
    </React.Fragment>
  );
}

export default App;
