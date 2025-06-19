<template>
  <div id="app">
    <DxDataGrid
      ref="grid"
      :data-source="employeeDataSource"
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
      :visible.sync="visible"
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
        :form-data.sync="formData"
      >
        <DxGroupItem
          :col-count="2"
        >
          <DxSimpleItem
            data-field="FirstName"
            :validation-rules="validationRules.firstName"
          >
            <DxLabel template="nameLabel"/>
          </DxSimpleItem>

          <DxSimpleItem
            data-field="Position"
            editor-type="dxSelectBox"
            :editor-options="positionEditorOptions"
          >
            <DxLabel template="positionLabel"/>
          </DxSimpleItem>

          <DxSimpleItem
            data-field="LastName"
            :validation-rules="validationRules.lastName"
          >
            <DxLabel template="nameLabel"/>
          </DxSimpleItem>

          <DxSimpleItem data-field="Address">
            <DxLabel template="addressLabel"/>
          </DxSimpleItem>

          <DxSimpleItem
            data-field="BirthDate"
            editor-type="dxDateBox"
            :validation-rules="validationRules.birthDate"
          >
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
            :validation-rules="validationRules.phone"
          >
            <DxLabel template="phoneLabel"/>
          </DxSimpleItem>

          <DxSimpleItem
            data-field="Email"
            :validation-rules="validationRules.email"
          >
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

<script lang="ts" setup>
import { ref } from 'vue';

import LabelTemplate from '../components/LabelTemplate.vue';
import LabelNotesTemplate from '../components/LabelNotesTemplate.vue';

import DxDataGrid, { DxColumn, DxButton, DxEditing, DxToolbar, DxItem } from 'devextreme-vue/data-grid';
import notify from 'devextreme/ui/notify';

import DxPopup, { DxToolbarItem } from 'devextreme-vue/popup';
import DxForm, { DxSimpleItem, DxLabel, DxGroupItem } from 'devextreme-vue/form';
import DxAddRowButton from 'devextreme-vue/button';
import validationEngine from 'devextreme/ui/validation_engine';
import 'devextreme-vue/text-area';

import { ArrayStore, DataSource } from 'devextreme-vue/common/data';

import { employees, type Employee } from '../data';

import {
  validationRules,
  positionEditorOptions,
  notesEditorOptions,
  phoneEditorOptions,
} from '../ValidationRulesAndEditorOptions';

const grid = ref<any>(null);
const visible = ref(false);
const isNewRecord = ref<boolean>(false);
const formData = ref<Employee>({} as Employee);
const validationGroupName = 'gridForm';

const employeeStore = new ArrayStore({
  data: employees,
  key: 'ID',
});

const employeeDataSource = new DataSource({
  store: employeeStore
});

function showPopup(newRecord: boolean, data: Employee) {
  formData.value = { ...data };
  isNewRecord.value = newRecord;
  visible.value = true;
}

function addRow() {
  showPopup(true, {
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
    Email: ''
  });
}

function editRow(e: any) {
  showPopup(false, { ...e.row.data });
}

function confirmChanges() {
  const result = validationEngine.validateGroup(validationGroupName);

  if (!result.isValid || !formData.value) return;

  const operation = isNewRecord.value
    ? employeeStore.insert(formData.value)
    : employeeStore.update(formData.value.ID, formData.value);

  operation
    .then(() => grid.value?.instance.refresh(true))
    .then(() => hidePopup())
    .catch(() => {
      notify('An error occurred while saving changes.', 'error', 3000);
    });

}

function hidePopup() {
  visible.value = false;
}
</script>
