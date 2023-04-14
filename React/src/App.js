import React, { useCallback, useState, useMemo, useRef } from 'react';
    
import 'devextreme/dist/css/dx.light.css';
import './App.css';

import DataGrid, { Column, Editing, Button, Toolbar } from 'devextreme-react/data-grid';
import Popup, { ToolbarItem } from 'devextreme-react/popup';
import Form, { Item, GroupItem, Label } from 'devextreme-react/form';
import validationEngine from 'devextreme/ui/validation_engine';
import AddRowButton from 'devextreme-react/button';
import LabelTemplate from './LabelTemplate.js';
import LabelNotesTemplate from './LabelNotesTemplate.js';
import 'devextreme-react/text-area';

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

const validationGroupName = "gridForm";
const App = () => {
    const gridRef = useRef(null);
    const [{isNewRecord, formData, visible}, setPopupState] = useState({});

    const showPopup = useCallback((isNewRecord, formData) => { 
        setPopupState({isNewRecord, formData, visible: true});
    }, []);

    const hidePopup = useCallback(() => { 
        setPopupState({visible: false});
    }, []);

    const confirmChanges = useCallback(() => { 
        const result = validationEngine.validateGroup(validationGroupName);
     
        if (!result.isValid) 
            return;

        if (isNewRecord)
            employeeStore.insert(formData); 
        else 
            employeeStore.update(formData["ID"], formData);

        gridRef.current.instance.refresh(true);
        hidePopup();
        
    }, [isNewRecord, formData, hidePopup]);

    const confirmBtnOptions = useMemo(() => {
        return { 
            text: "Confirm", 
            type: "success",
            onClick: confirmChanges 
        }
    }, [confirmChanges]);
    
    const cancelBtnOptions = useMemo(() => { 
        return { 
            text: "Cancel", 
            onClick: hidePopup
        }
    }, [hidePopup]);

    const editRow = useCallback((e) => { 
        showPopup(false, {...e.row.data});
    }, [showPopup]);

    const addRow = useCallback(() => { 
        showPopup(true, {});
    }, [showPopup]);

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
                    <Button name="edit" onClick={editRow} />
                    <Button name="delete" />
                </Column>
                <Toolbar>
                    <Item location="after">
                        <AddRowButton
                            icon="plus"
                            onClick={addRow} />
                    </Item>
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
                            <Item dataField="FirstName" validationRules={validationRules.firstName} >
                                <Label render={LabelTemplate("user")} />
                            </Item>
                            <Item dataField="Position" editorType="dxSelectBox" editorOptions={positionEditorOptions} >
                                <Label render={LabelTemplate("info")} />
                            </Item>
                            <Item dataField="LastName" validationRules={validationRules.lastName} >
                                <Label render={LabelTemplate("user")} />
                            </Item>
                            <Item dataField="Address">
                                <Label render={LabelTemplate("home")} />
                            </Item>
                            <Item dataField="BirthDate" editorType="dxDateBox" validationRules={validationRules.birthDate} >
                                <Label render={LabelTemplate("event")} />
                            </Item>
                            <Item dataField="HireDate" editorType="dxDateBox" >
                                <Label render={LabelTemplate("event")} />
                            </Item>
                            <Item dataField="Notes" colSpan={2} editorType="dxTextArea" editorOptions={notesEditorOptions}>
                                <Label render={LabelNotesTemplate} />
                            </Item>
                            <Item dataField="Phone" editorOptions={phoneEditorOptions} validationRules={validationRules.phone}>
                                <Label render={LabelTemplate("tel")} />
                            </Item>
                            <Item dataField="Email" validationRules={validationRules.email}>
                                <Label render={LabelTemplate("email")} />
                            </Item>
                        </GroupItem>
                    </Form>
                </Popup>
            ) : null }
            
        </React.Fragment>
    );
}

export default App;
