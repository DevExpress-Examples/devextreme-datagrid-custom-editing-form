import React, { useCallback, useState, useMemo, useRef } from 'react';
    
import 'devextreme/dist/css/dx.light.css';
import './App.css';

import DataGrid, { Column, Editing, Button, Toolbar } from 'devextreme-react/data-grid';
import Popup, { ToolbarItem } from 'devextreme-react/popup';
import Form, { Item, GroupItem, Label } from 'devextreme-react/form';
import AddRowButton from 'devextreme-react/button';
import LabelTemplate from './LabelTemplate.js';
import LabelNotesTemplate from './LabelNotesTemplate.js';
import 'devextreme-react/text-area';

import DataSource from 'devextreme/data/data_source';
import ArrayStore from 'devextreme/data/array_store';

import { employees } from './data.js';

import { 
    validationRules, 
    positionEditorOptions, 
    notesEditorOptions, 
    phoneEditorOptions 
} from './ValidationRulesAndEditorOptions.js';

const employeeStore = new ArrayStore({
    data: employees,
    key: "ID",
});

const dataGridStore = new DataSource({
    store: employeeStore,
    reshapeOnPush: true,
});

const App = () => {
    const [rowData, setRowData] = useState({});
    const [popupVisible, setPopupVisible] = useState(false); 
    const [popupMode, setPopupMode] = useState("");

    const formRef = useRef(null);
    const gridRef = useRef(null);

    const confirmChanges = useCallback(() => { 
        let validationResult = formRef.current.instance.validate();
        
        if (validationResult.isValid) {
            let currentFormData = formRef.current.instance.option("formData");

            if (popupMode === "Add") {
                employeeStore.insert(currentFormData); 
            } else if (popupMode === "Edit") {
                employeeStore.update(currentFormData["ID"], currentFormData);
            } 

            gridRef.current.instance.refresh(true);
            setPopupVisible(false);
        }
    }, [popupMode]);

    const cancelChanges = useCallback(() => {  
        setPopupVisible(false);
    }, []);

    const showPopup = useCallback((popupMode, data) => { 
        setPopupVisible(true);
        setPopupMode(popupMode);
        setRowData(data);
    }, []);

    const onHiding = useCallback(() => { 
        setPopupVisible(false);
    }, []);

    const confirmBtnOptions = useMemo(() => {
        return { 
            text: 'Confirm', 
            type: 'success',
            onClick: confirmChanges 
        }
    }, [confirmChanges]);
    
    const cancelBtnOptions = useMemo(() => { 
        return { 
            text: 'Cancel', 
            onClick: cancelChanges 
        }
    }, [cancelChanges]);

    const editRow = useCallback((e) => { 
        showPopup("Edit", {...e.row.data});
    }, [showPopup]);

    const addRow = useCallback(() => { 
        showPopup("Add", {});
    }, [showPopup]);

    return (
        <React.Fragment>
            <DataGrid
                dataSource={dataGridStore}
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
                    <Item location="after">
                        <AddRowButton
                            icon='plus'
                            onClick={addRow} />
                    </Item>
                </Toolbar>
            </DataGrid>

            <Popup 
                title={popupMode}
                hideOnOutsideClick={true}
                visible={popupVisible}
                height={420}
                onHiding={onHiding}
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
                    ref={formRef}
                    formData={rowData} 
                >
                    <GroupItem colCount={2} >
                        <Item dataField="FirstName" validationRules={validationRules.firstName} >
                            <Label render={LabelTemplate('user')} />
                        </Item>
                        <Item dataField="Position" editorType="dxSelectBox" editorOptions={positionEditorOptions} >
                            <Label render={LabelTemplate('info')} />
                        </Item>
                        <Item dataField="LastName" validationRules={validationRules.lastName} >
                            <Label render={LabelTemplate('user')} />
                        </Item>
                        <Item dataField="Address">
                            <Label render={LabelTemplate('home')} />
                        </Item>
                        <Item dataField="BirthDate" editorType="dxDateBox" validationRules={validationRules.birthDate} >
                            <Label render={LabelTemplate('event')} />
                        </Item>
                        <Item dataField="HireDate" editorType="dxDateBox" >
                            <Label render={LabelTemplate('event')} />
                        </Item>
                        <Item dataField="Notes" colSpan={2} editorType="dxTextArea" editorOptions={notesEditorOptions}>
                            <Label render={LabelNotesTemplate} />
                        </Item>
                        <Item dataField="Phone" editorOptions={phoneEditorOptions} validationRules={validationRules.phone}>
                            <Label render={LabelTemplate('tel')} />
                        </Item>
                        <Item dataField="Email" validationRules={validationRules.email}>
                            <Label render={LabelTemplate('email')} />
                        </Item>
                    </GroupItem>
                </Form>
            </Popup>
        </React.Fragment>
    );
}

export default App;
