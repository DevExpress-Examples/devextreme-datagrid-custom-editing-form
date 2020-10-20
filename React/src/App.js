import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import React, { useMemo, useReducer } from 'react';
import './App.css';
import { DataGrid, Editing, Column, Button } from 'devextreme-react/data-grid'
import { Popup, ToolbarItem } from 'devextreme-react/popup'
import { Form, SimpleItem } from 'devextreme-react/form'
import {
  RequiredRule,
} from 'devextreme-react/validator';
import { customers } from './data.js';
import DataSource from 'devextreme/data/data_source';
import ArrayStore from 'devextreme/data/array_store'

const key = "ID";
const customerStore = new ArrayStore({
    data: customers,
    key: key
  }), 
  gridSource = new DataSource({
    store: customerStore
  })
const colCountByScreen = { 
  lg: 2, md: 2, sm: 1, xs: 1
}
const formRef = React.createRef(),
  getForm = () => {
    return formRef.current.instance;
  }
const initPopupState = {
  formData: {},
  popupVisible: false,
  popupMode: ""
}


function App() {
  const [{formData, popupVisible, popupMode}, dispatchPopup] = useReducer(popupReducer, initPopupState)

  const confirmBtnOptions = useMemo(() => { 
    console.log("updated confirmbtnOptions")
    return { 
      text: 'Confirm', 
      type: 'success',
      onClick: confirmClick 
    }
  }, [formData]);

  const cancelBtnOptions = useMemo(() => { 
    return { 
      text: 'Cancel', 
      onClick: cancelClick 
    }
  }, []);

  function onToolbarPreparing(e) {
    let toolbarItems = e.toolbarOptions.items;
  
    // customize addRow toolbar button
    for (let i = 0; i < toolbarItems.length; i++) {
        let item = toolbarItems[i];
        if (item.name === "addRowButton") {
            item.options.onClick = addClick;
            break;
        }
    }
  }

  function editClick(e) {
    showPopup("Edit", {...e.row.data});
  }

  function addClick(e) {
    showPopup("Add", {});
  }

  function confirmClick(e) {
    let result = getForm().validate();
    if (result.isValid) {
      if (popupMode === "Add")
        customerStore.push([{ type: "insert", data: formData }]);
      else if (popupMode === "Edit") 
        customerStore.push([{type: "update", data: formData, key: formData[key]}]);

      dispatchPopup({type: "hidePopup"})
      gridSource.reload();
    }
  }

  function cancelClick(e) {
    dispatchPopup({type: "hidePopup"})
  }

  function showPopup(popupMode, data) {
    dispatchPopup({type: "initPopup", data, popupMode})
  }

  function onHiding() {
    dispatchPopup({type: "hidePopup"});
  }

  return (
    <React.Fragment>
      <DataGrid
        dataSource={gridSource}
        onToolbarPreparing={onToolbarPreparing}
      >
        <Editing 
          allowUpdating={true}
          allowAdding={true}
          allowDeleting={true}
          useIcons={true}
          mode="popup"
        />
        <Column dataField="ID" dataType="number"/>
        <Column dataField="CompanyName" dataType="string"/>
        <Column dataField="Zipcode" dataType="number"/>
        <Column dataField="Website" dataType="string"/>
        <Column type="buttons">
            <Button name="edit" onClick={editClick} />
            <Button name="delete" />
        </Column>
      </DataGrid>
      <Popup 
        title={popupMode}
        closeOnOutsideClick={true}
        visible={popupVisible}
        onHiding={onHiding}>
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
            formData={formData}
            labelLocation="top"
            showColonAfterLabel={true}
            colCountByScreen={colCountByScreen}>
            <SimpleItem dataField="ID">
              <RequiredRule />
            </SimpleItem>
            <SimpleItem dataField="CompanyName">
              <RequiredRule />
            </SimpleItem>
            <SimpleItem dataField="Zipcode">
              <RequiredRule />
            </SimpleItem>
            <SimpleItem dataField="Website">
              <RequiredRule />
            </SimpleItem>
          </Form>
        </Popup>

    </React.Fragment>
  );
}

export default App;

function popupReducer(state, action) {
  switch(action.type) {
    case "initPopup":
      return {
        formData: action.data,
        popupVisible: true,
        popupMode: action.popupMode
      }
    case "hidePopup":
      return {
        popupVisible: false
      }
    default: 
      break;
  }
}
