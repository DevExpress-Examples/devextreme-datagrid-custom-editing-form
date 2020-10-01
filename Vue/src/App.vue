<template>
  <div id="app">
      <DxPopup 
        ref="popup"
        :title="popupTitle"
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
    <DxDataGrid 
      ref="dataGrid"
      :data-source="source"
      key-expr="ID"
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
  </div>
</template>

<script>
import DxDataGrid, { DxColumn, DxButton, DxEditing } from 'devextreme-vue/data-grid';
import DxPopup, { DxToolbarItem } from 'devextreme-vue/popup'
import { DxForm, DxSimpleItem, DxRequiredRule } from 'devextreme-vue/form';

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
      mode: "",
      formData: {},
      popupTitle: "Add",
      popupVisible: false,
      source: [{
          "ID": 1,
          "CompanyName": "Super Mart of the West",
          "Zipcode": 72716,
          "Website": "http://www.nowebsitesupermart.com"
      }, {
          "ID": 2,
          "CompanyName": "Electronics Depot",
          "Zipcode": 30339,
          "Website": "http://www.nowebsitedepot.com"
      }, {
          "ID": 3,
          "CompanyName": "K&S Music",
          "Zipcode": 55403,
          "Website": "http://www.nowebsitemusic.com"
      }]
    }
  },
  methods: {
    onToolbarPreparing(e) {
      let toolbarItems = e.toolbarOptions.items;

      toolbarItems.forEach((item) => {
        if (item.name === "addRowButton") {
          item.options.onClick = () => {
            this.showPopup("add", undefined);
          }
        }
      });
    },
    showPopup(popupMode, data) {
      this.mode = popupMode;
      this.formData = data !== undefined ? data : {};
      
      this.popupTitle = popupMode === "add" ? "Add" : "Edit";

      this.popupVisible = true;
    },
    editClick(e) {
      this.showPopup("edit", e.row.data);
    },
    confirmClick() {
        let form = this.form;
        let result = form.validate();
        let gridSource = this.grid.getDataSource();
        let data = this.formData;
        if (this.mode === "edit") {
            if (result.isValid) {
                console.log("edit", data);
                gridSource.store().push([
                    {
                        type: "update",
                        data: data,
                        key: data["ID"]
                    }
                ]);
                gridSource.reload();

                this.formData = {};

                this.popup.hide();
            }
        } else if (this.mode === "add") {
            if (result.isValid) {
                console.log("add", data);
                gridSource.store().push([
                    {
                        type: "insert",
                        data: data
                    }
                ]);
                gridSource.reload();

                this.formData = {};
                
                this.popup.hide();
            }
        }
    },
    cancelClick() {
        this.popup.hide();
    }
  },
  computed: {
    grid: function() {
      return this.$refs.dataGrid.instance;
    },
    popup: function() {
      return this.$refs.popup.instance;
    },
    form: function() {
      return this.$refs.form.instance;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
