import { Component, ViewChild } from '@angular/core';
import { DxFormComponent } from 'devextreme-angular';
import DataSource from 'devextreme/data/data_source';
import ArrayStore from 'devextreme/data/array_store'
import { Customer, Service } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Service]
})
export class AppComponent {
    @ViewChild("form", {static: false}) form: DxFormComponent;
    key: string = "ID";
    formData: any = {};
    popupMode: string = "Add";
    popupVisible: boolean = false;
    customers: Customer[];
    customerStore: ArrayStore;
    gridSource: DataSource;

    constructor(service: Service) {
        this.customers = service.getCustomers();
        this.customerStore = new ArrayStore({
            data: this.customers,
            key: this.key
        })
        this.gridSource = new DataSource({
            store: this.customerStore
        })

        this.addClick = this.addClick.bind(this);
        this.editClick = this.editClick.bind(this);
        this.confirmClick = this.confirmClick.bind(this);
        this.cancelClick = this.cancelClick.bind(this);
        this.onToolbarPreparing = this.onToolbarPreparing.bind(this);
    }

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
    }

    showPopup(popupMode, data) {
        this.formData = data;
        this.popupMode = popupMode;
        this.popupVisible = true;
    }

    confirmClick(e) {
        let result = this.form.instance.validate();
        if (result.isValid) {
            let gridSource = this.gridSource,
                gridStore = this.customerStore;

            if (this.popupMode === "Add")
                gridStore.push([{ type: "insert", data: this.formData }]);
            else if (this.popupMode === "Edit") 
                gridStore.push([{ type: "update", data: this.formData, key: this.formData[this.key]}]);
            

            gridSource.reload();
            this.popupVisible = false;
        }
    }

    addClick(e) {
        this.showPopup("Add", undefined);
    }

    editClick(e) {
        this.showPopup("Edit", {...e.row.data});
    }

    cancelClick(e) {
        this.popupVisible = false;
        this.form.instance.resetValues();
    }
}
