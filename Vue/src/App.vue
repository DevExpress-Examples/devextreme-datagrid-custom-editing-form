<template>
  <div id="app">
    <DxDataGrid 
      ref="dataGrid"
      :data-source="gridSource"
      @toolbar-preparing="onToolbarPreparing"
      >
      <DxEditing 
        :allow-updating="true"
        :allow-adding="true"
        :allow-deleting="true"
        :use-icons="true"
        mode="popup"/>
      <DxColumn data-field="ID" />
      <DxColumn dataField="CompanyName"/>
      <DxColumn dataField="Zipcode"/>
      <DxColumn dataField="Website"/>
      <DxColumn type="buttons">
        <DxButton name="edit" :on-click="editClick"/>
        <DxButton name="delete"/>
      </DxColumn>
    </DxDataGrid>
    <DxPopup 
        ref="popup"
        :title="popupMode"
        :close-on-outside-click="true"
        :visible.sync="popupVisible">
        <DxToolbarItem
            widget="dxButton"
            location="after"
            toolbar="bottom"
            :options="{ 
              text: 'Confirm', type: 'success',
              onClick: confirmClick 
            }"/>
        <DxToolbarItem 
            widget="dxButton"
            location="after"
            toolbar="bottom"
            :options="{ 
              text: 'Cancel',
              onClick: cancelClick 
            }"/>
        <template>
        </template>
          <DxForm 
            ref="form"
            :form-data.sync="formData"
            label-location="top"
            :show-colon-after-label="true"
            :col-count-by-screen="{ 
                lg: 2, md: 2, sm: 1, xs: 1
            }">
            <DxSimpleItem dataField="ID">
                <DxRequiredRule />
            </DxSimpleItem>
            <DxSimpleItem dataField="CompanyName">
                <DxRequiredRule />
            </DxSimpleItem>
            <DxSimpleItem dataField="Zipcode">
                <DxRequiredRule />
            </DxSimpleItem>
            <DxSimpleItem dataField="Website">
                <DxRequiredRule />
            </DxSimpleItem>
          </DxForm>
    </DxPopup>
  </div>
</template>

<script>
import DxDataGrid, { DxColumn, DxButton, DxEditing } from 'devextreme-vue/data-grid';
import DxPopup, { DxToolbarItem } from 'devextreme-vue/popup'
import { DxForm, DxSimpleItem, DxRequiredRule } from 'devextreme-vue/form';
import DataSource from 'devextreme/data/data_source';
import ArrayStore from 'devextreme/data/array_store';
import { customers } from './data.js';

const key = "ID",
  customerStore = new ArrayStore({
      data: customers,
      key: key,
      onPush:  function() {
          gridSource.reload()
      }
  }),
  gridSource = new DataSource({
    store: customerStore
  })

export default {
  name: 'App',
  components: {
    DxDataGrid,
    DxColumn,
    DxButton,
    DxEditing,
    DxPopup,
    DxToolbarItem,
    DxForm, 
    DxSimpleItem, 
    DxRequiredRule
  },
  data() {
    return {
      formData: {},
      popupMode: "Add",
      popupVisible: false,
      customerStore,
      gridSource
    }
  },
  methods: {
    onToolbarPreparing(e) {
      let toolbarItems = e.toolbarOptions.items;

      // customize addRow toolbar button
      for (let i = 0; i < toolbarItems.length; i++) {
        let item = toolbarItems[i];
        if (item.name === "addRowButton") {
            item.options.onClick = this.addClick;
            break;
        }
      }
    },
    showPopup(popupMode, data) {
      this.formData = data;
      this.popupMode = popupMode;
      this.popupVisible = true;
    },
    addClick() {
      this.showPopup("Add", {});
    },
    editClick(e) {
      this.showPopup("Edit", {...e.row.data});
    },
    confirmClick() {
        let result = this.form.validate();
        if (result.isValid) {
            const gridStore = this.customerStore;

            if (this.popupMode === "Add")
                gridStore.push([{ type: "insert", data: this.formData }]);
            else if (this.popupMode === "Edit") {
                gridStore.push([{ type: "update", data: this.formData, key: this.formData[key]}]);
            }
            
            this.popupVisible = false;
        }
    },
    cancelClick() {
        this.popupVisible = false;
    }
  },
  computed: {
    form: function() {
      return this.$refs.form.instance;
    }
  }
}
</script>

