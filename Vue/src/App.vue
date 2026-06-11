<template>
  <div id="app">
    <DxDataGrid
      ref="grid"
      :data-source="{ store: employeeStore }"
      :show-borders="true"
      :repaint-changes-only="true"
    >
      <DxEditing
        :allow-updating="true"
        :allow-adding="true"
        :allow-deleting="true"
        :use-icons="true"
        mode="popup"
      />
      <DxColumn
        data-field="FirstName"
        data-type="string"
      />
      <DxColumn
        data-field="LastName"
        data-type="string"
      />
      <DxColumn
        data-field="BirthDate"
        data-type="date"
      />
      <DxColumn
        data-field="Position"
        data-type="string"
        :width="170"
      />
      <DxColumn
        data-field="HireDate"
        data-type="date"
      />
      <DxColumn
        data-field="Address"
        data-type="string"
      />
      <DxColumn type="buttons">
        <DxButton
          name="edit"
          :on-click="editRow"
        />
        <DxButton name="delete"/>
      </DxColumn>
      <DxToolbar>
        <DxItem
          location="after"
          template="addRowTemplate"
        />
      </DxToolbar>

      <template #addRowTemplate>
        <DxAddRowButton
          icon="plus"
          @click="addRow"
        />
      </template>
    </DxDataGrid>

    <DxPopup
      :title="isNewRecord ? 'Add' : 'Edit'"
      height="auto"
      :close-on-outside-click="true"
      v-model:visible="visible"
    >
      <DxToolbarItem
        widget="dxButton"
        location="after"
        toolbar="bottom"
        :options="{
          text: 'Confirm',
          type: 'success',
          onClick: confirmChanges
        }"
      />
      <DxToolbarItem
        widget="dxButton"
        location="after"
        toolbar="bottom"
        :options="{
          text: 'Cancel',
          onClick: hidePopup
        }"
      />

      <DxForm
        :validation-group="validationGroupName"
        v-model:form-data="formData"
      >
        <DxGroupItem
          :col-count="2"
        >
          <DxSimpleItem data-field="FirstName">
            <DxRequiredRule message="First Name is required."/>
            <DxLabel template="nameLabel"/>
          </DxSimpleItem>

          <DxSimpleItem
            data-field="Position"
            editor-type="dxSelectBox"
            :editor-options="positionEditorOptions"
          >
            <DxLabel template="positionLabel"/>
          </DxSimpleItem>

          <DxSimpleItem data-field="LastName">
            <DxRequiredRule message="Last Name is required."/>
            <DxLabel template="nameLabel"/>
          </DxSimpleItem>

          <DxSimpleItem data-field="Address">
            <DxLabel template="addressLabel"/>
          </DxSimpleItem>

          <DxSimpleItem
            data-field="BirthDate"
            editor-type="dxDateBox"
          >
            <DxRequiredRule message="Birth Date is required."/>
            <DxLabel template="dateLabel"/>
          </DxSimpleItem>

          <DxSimpleItem
            data-field="HireDate"
            editor-type="dxDateBox"
          >
            <DxLabel template="dateLabel"/>
          </DxSimpleItem>

          <DxSimpleItem
            data-field="Notes"
            :col-span="2"
            editor-type="dxTextArea"
            :editor-options="notesEditorOptions"
          >
            <DxLabel template="notesLabel"/>
          </DxSimpleItem>

          <DxSimpleItem
            data-field="Phone"
            :editor-options="phoneEditorOptions"
          >
            <DxRequiredRule message="Phone number is required."/>
            <DxLabel template="phoneLabel"/>
          </DxSimpleItem>

          <DxSimpleItem data-field="Email">
            <DxEmailRule message="Email is incorrect."/>
            <DxLabel template="emailLabel"/>
          </DxSimpleItem>
        </DxGroupItem>

        <template #nameLabel="{ data }">
          <LabelTemplate
            :data="data"
            icon="user"
          />
        </template>
        <template #positionLabel="{ data }">
          <LabelTemplate
            :data="data"
            icon="info"
          />
        </template>
        <template #dateLabel="{ data }">
          <LabelTemplate
            :data="data"
            icon="event"
          />
        </template>
        <template #addressLabel="{ data }">
          <LabelTemplate
            :data="data"
            icon="home"
          />
        </template>
        <template #notesLabel="{ data }">
          <LabelNotesTemplate
            :data="data"
          />
        </template>
        <template #phoneLabel="{ data }">
          <LabelTemplate
            :data="data"
            icon="tel"
          />
        </template>
        <template #emailLabel="{ data }">
          <LabelTemplate
            :data="data"
            icon="email"
          />
        </template>
      </DxForm>
    </DxPopup>
  </div>
</template>

<script lang="ts">
import DxDataGrid, { DxColumn, DxButton, DxEditing, DxToolbar, DxItem, type DxDataGridTypes } from 'devextreme-vue/data-grid';
import DxPopup, { DxToolbarItem } from 'devextreme-vue/popup';
import DxForm, { DxSimpleItem, DxLabel, DxGroupItem, DxRequiredRule, DxEmailRule } from 'devextreme-vue/form';
import DxAddRowButton from 'devextreme-vue/button';
import validationEngine from 'devextreme/ui/validation_engine';
import 'devextreme-vue/text-area';

import LabelTemplate from './LabelTemplate.vue';
import LabelNotesTemplate from './LabelNotesTemplate.vue';

import ArrayStore from 'devextreme/data/array_store';
import type DataGrid from 'devextreme/ui/data_grid';

import { employees, positions, type Employee } from './data';

const employeeStore = new ArrayStore({
  data: employees,
  key: 'ID',
});

export default {
  name: 'App',
  components: {
    DxDataGrid,
    DxColumn,
    DxButton,
    DxEditing,
    DxToolbar,
    DxItem,
    DxAddRowButton,
    DxPopup,
    DxToolbarItem,
    DxForm,
    DxSimpleItem,
    DxLabel,
    DxGroupItem,
    DxRequiredRule,
    DxEmailRule,
    LabelTemplate,
    LabelNotesTemplate,
  },
  data() {
    return {
      formData: {} as Employee,
      isNewRecord: null,
      visible: false,
      employeeStore,
      validationGroupName: 'gridForm',
      positionEditorOptions: { items: positions, searchEnabled: true },
      notesEditorOptions: { height: 90, maxLength: 200 },
      phoneEditorOptions: {
        mask: '+1 (X00) 000-0000',
        maskRules: { X: /[02-9]/ },
        maskInvalidMessage: 'The phone must have a correct USA phone format',
      }
    };
  },
  computed: {
    grid: function(): DataGrid {
      return (this.$refs.grid as any).instance;
    }
  },
  methods: {
    showPopup(isNewRecord:any, formData:Employee) {
      this.formData = formData;
      this.isNewRecord = isNewRecord;
      this.visible = true;
    },
    addRow() {
      this.showPopup(true, {} as Employee);
    },
    editRow(e:DxDataGridTypes.ColumnButtonClickEvent) {
      this.showPopup(false, { ...e.row?.data } as Employee);
    },
    confirmChanges() {
      const result = validationEngine.validateGroup(this.validationGroupName);

      if (!result.isValid)
      { return; }

      if (this.isNewRecord)
      { this.employeeStore.insert(this.formData); }
      else
      { this.employeeStore.update(this.formData['ID'], this.formData); }

      this.grid.refresh(true);
      this.hidePopup();
    },
    hidePopup() {
      this.visible = false;
    }
  }
};
</script>
