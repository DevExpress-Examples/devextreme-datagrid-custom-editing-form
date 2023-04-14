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
            <DxColumn data-field="FirstName" data-type="string" />
            <DxColumn data-field="LastName" data-type="string" />
            <DxColumn data-field="BirthDate" data-type="date" />
            <DxColumn data-field="Position" data-type="string" :width="170" />
            <DxColumn data-field="HireDate" data-type="date" />
            <DxColumn data-field="Address" data-type="string" />
            <DxColumn type="buttons">
                <DxButton name="edit" :on-click="editRow" />
                <DxButton name="delete" />
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
            :title="this.isNewRecord ? 'Add' : 'Edit'"
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
                :validationGroup="validationGroupName"
                :form-data.sync="formData"
            >   
                <DxGroupItem
                    :col-count="2"
                >
                    <DxSimpleItem data-field="FirstName" :validation-rules="validationRules.firstName" >
                        <DxLabel template="nameLabel" />
                    </DxSimpleItem>

                    <DxSimpleItem data-field="Position" editor-type="dxSelectBox" :editor-options="positionEditorOptions" >
                        <DxLabel template="positionLabel" />
                    </DxSimpleItem>

                    <DxSimpleItem data-field="LastName" :validation-rules="validationRules.lastName" >
                        <DxLabel template="nameLabel" />
                    </DxSimpleItem>

                    <DxSimpleItem data-field="Address">
                        <DxLabel template="addressLabel" />
                    </DxSimpleItem>

                    <DxSimpleItem data-field="BirthDate" editor-type="dxDateBox" :validation-rules="validationRules.birthDate" >
                        <DxLabel template="dateLabel" />
                    </DxSimpleItem>

                    <DxSimpleItem data-field="HireDate" editor-type="dxDateBox" >
                        <DxLabel template="dateLabel" />
                    </DxSimpleItem>

                    <DxSimpleItem data-field="Notes" :col-span="2" editor-type="dxTextArea" :editor-options="notesEditorOptions">
                        <DxLabel template="notesLabel" />
                    </DxSimpleItem>

                    <DxSimpleItem data-field="Phone" :editor-options="phoneEditorOptions" :validation-rules="validationRules.phone">
                        <DxLabel template="phoneLabel" />
                    </DxSimpleItem>

                    <DxSimpleItem data-field="Email" :validation-rules="validationRules.email">
                        <DxLabel template="emailLabel" />
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

<script>
import DxDataGrid, { DxColumn, DxButton, DxEditing, DxToolbar, DxItem } from 'devextreme-vue/data-grid';
import DxPopup, { DxToolbarItem } from 'devextreme-vue/popup'
import DxForm, { DxSimpleItem, DxLabel, DxGroupItem } from 'devextreme-vue/form';
import DxAddRowButton from 'devextreme-vue/button';
import validationEngine from 'devextreme/ui/validation_engine';
import 'devextreme-vue/text-area';

import LabelTemplate from './LabelTemplate.vue';
import LabelNotesTemplate from './LabelNotesTemplate.vue';

import ArrayStore from 'devextreme/data/array_store';

import { employees, positions } from './data.js';

const employeeStore = new ArrayStore({
    data: employees,
    key: 'ID',
});

export default {
    name: "App",
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
        LabelTemplate,
        LabelNotesTemplate,
    },
    data() {
        return {
            formData: {},
            isNewRecord: null,
            visible: false,
            employeeStore,
            validationGroupName: "gridForm", 
            positionEditorOptions: { items: positions, searchEnabled: true },
            notesEditorOptions: { height: 90, maxLength: 200 },
            phoneEditorOptions: { 
                mask: "+1 (X00) 000-0000", 
                maskRules: { X: /[02-9]/ },
                maskInvalidMessage: "The phone must have a correct USA phone format",
            },
            validationRules: {
                firstName: [{ type: "required", message: "First Name is required." }],
                lastName: [{ type: "required", message: "Last Name is required." }],
                phone: [{ type: "required", message: "Phone number is required." }],
                email: [{ type: "email", message: "Email is incorrect." }],
                birthDate: [
                    { 
                        type: "required", 
                        message: "Birth Date is required.", 
                        invalidDateMessage: "The date must have the following format: mm/dd/yyyy", 
                    },
                ]
            }
        }
    },
    methods: {
        showPopup(isNewRecord, formData) {
            this.formData = formData;
            this.isNewRecord = isNewRecord;
            this.visible = true;
        },
        addRow() {
            this.showPopup(true, {});
        },
        editRow(e) {
            this.showPopup(false, {...e.row.data});
        },
        confirmChanges() {
            const result = validationEngine.validateGroup(this.validationGroupName);

            if (!result.isValid) 
                return;

            if (this.isNewRecord)
                this.employeeStore.insert(this.formData); 
            else 
                this.employeeStore.update(this.formData["ID"], this.formData);

            this.grid.refresh(true);
            this.hidePopup(); 
        },
        hidePopup() {
            this.visible = false;
        }
    },
    computed: {
        grid: function() {
            return this.$refs.grid.instance;
        }
    }
}
</script>
