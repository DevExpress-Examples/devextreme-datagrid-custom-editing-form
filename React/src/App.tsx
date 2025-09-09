import React, { useCallback, useState, useMemo, useRef } from 'react';
    
import 'devextreme/dist/css/dx.light.css';
import './App.css';

import DataGrid, { Column, Editing, Button as ColumnButton, Toolbar, Item as GridToolbarItem,  type DataGridRef } from 'devextreme-react/data-grid';
import Popup, { ToolbarItem } from 'devextreme-react/popup';
import Form, { Item, GroupItem, Label, RequiredRule, EmailRule } from 'devextreme-react/form';
import validationEngine from 'devextreme/ui/validation_engine';
import Button from 'devextreme-react/button';
import LabelTemplate from './LabelTemplate.tsx';
import LabelNotesTemplate from './LabelNotesTemplate.tsx';
import 'devextreme-react/text-area';

import ArrayStore from 'devextreme/data/array_store';

import { employees } from './data.ts';

import { 
    positionEditorOptions, 
    notesEditorOptions, 
    phoneEditorOptions 
} from './EditorOptions.ts';

const employeeStore = new ArrayStore({
    data: employees,
    key: "ID",
});

const validationGroupName = "gridForm";
type Employee = {
    ID: number;
    FirstName: string;
    LastName: string;
    Prefix: string;
    Position: string;
    BirthDate: string;
    HireDate: string;
    Notes: string;
    Address: string;
    Phone: string;
    Email: string;
};

interface PopupState {
    isNewRecord: boolean;
    formData: Partial<Employee>;
    visible: boolean;
  }

const App = () => {
    const gridRef = useRef<DataGridRef>(null);
    const [{isNewRecord, formData, visible}, setPopupState] = useState<PopupState>({ isNewRecord: false, formData: {} as Partial<Employee>, visible: false });

    // Define hidePopup and showPopup before using them in hooks
    const hidePopup = useCallback(() => {
        setPopupState((prev) => ({ ...prev, visible: false }));
    }, []);

    const showPopup = useCallback((isNew: boolean, data: Partial<Employee>) => {
        setPopupState({ isNewRecord: isNew, formData: data, visible: true });
    }, []);

    const confirmChanges = useCallback(() => { 
        const result = validationEngine.validateGroup(validationGroupName);
     
        if (!result.isValid) 
            return;

        if (isNewRecord)
            employeeStore.insert(formData as Employee); 
        else if (formData.ID !== undefined)
            employeeStore.update(formData.ID, formData as Employee);

        gridRef.current?.instance().refresh(true);
        hidePopup();
        
    }, [isNewRecord, formData, hidePopup]);

    const confirmBtnOptions = useMemo(() => ({
        text: isNewRecord ? "Add" : "Save",
        type: "success",
        onClick: confirmChanges
    }), [isNewRecord, confirmChanges]);

    const editRow = useCallback((e: any) => { 
        showPopup(false, {...e.row.data});
    }, [showPopup]);

    const addRow = useCallback(() => { 
        showPopup(true, {});
    }, [showPopup]);
    const cancelBtnOptions = useMemo(() => { 
        return { 
            text: "Cancel", 
            onClick: hidePopup
        }
    }, [hidePopup]);

    return (
        <React.Fragment>
            <DataGrid
                dataSource={{store: employeeStore}}
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
                    <ColumnButton name="edit" onClick={editRow} />
                    <ColumnButton name="delete" />
                </Column>
                <Toolbar>
                    <GridToolbarItem location="after">
                        <Button
                            icon="plus"
                            onClick={addRow} />
                    </GridToolbarItem>
                </Toolbar>
            </DataGrid>
            { visible ? (
                <Popup 
                    title={isNewRecord ? "Add" : "Edit"}
                    hideOnOutsideClick={true}
                    visible={true}
                    height={"auto"}
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
                        <GroupItem colCount={2} >
                            <Item dataField="FirstName">
                                <Label render={LabelTemplate("user")} />
                                <RequiredRule message="First Name is required." />
                            </Item>
                            <Item dataField="Position" editorType="dxSelectBox" editorOptions={positionEditorOptions} >
                                <Label render={LabelTemplate("info")} />
                            </Item>
                            <Item dataField="LastName">
                                <Label render={LabelTemplate("user")} />
                                <RequiredRule message="Last Name is required." />
                            </Item>
                            <Item dataField="Address">
                                <Label render={LabelTemplate("home")} />
                            </Item>
                            <Item dataField="BirthDate" editorType="dxDateBox">
                                <Label render={LabelTemplate("event")} />
                                <RequiredRule message="Birth Date is required." />
                            </Item>
                            <Item dataField="HireDate" editorType="dxDateBox" >
                                <Label render={LabelTemplate("event")} />
                            </Item>
                            <Item dataField="Notes" colSpan={2} editorType="dxTextArea" editorOptions={notesEditorOptions}>
                                <Label render={LabelNotesTemplate} />
                            </Item>
                            <Item dataField="Phone" editorOptions={phoneEditorOptions}>
                                <Label render={LabelTemplate("tel")} />
                                <RequiredRule message="Phone number is required." />
                            </Item>
                            <Item dataField="Email">
                                <Label render={LabelTemplate("email")} />
                                <EmailRule message="Email is incorrect." />
                            </Item>
                        </GroupItem>
                    </Form>
                </Popup>
            ) : null }
            
        </React.Fragment>
    );
}

export default App;
