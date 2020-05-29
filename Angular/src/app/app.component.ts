import { Component, ViewChild } from '@angular/core';
import { DxDataGridComponent, DxPopupComponent, DxFormComponent } from 'devextreme-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';

    @ViewChild("grid", {static: false}) grid: DxDataGridComponent;
    @ViewChild("popup", {static: false}) popup: DxPopupComponent;
    @ViewChild("form", {static: false}) form: DxFormComponent;
    mode: string = "";
    formData: any = {};
    popupTitle: string = "Add";
    popupVisible: boolean = false;

    constructor() {
        this.editClick = this.editClick.bind(this);
        this.confirmClick = this.confirmClick.bind(this);
        this.cancelClick = this.cancelClick.bind(this);
    }

    editClick(e) {
        this.showPopup("edit", e.row.data);
    }

    onToolbarPreparing(e) {
        let toolbarItems = e.toolbarOptions.items;

        toolbarItems.forEach((item) => {
            if (item.name === "addRowButton") {
                item.options.onClick = (x) => {
                    this.showPopup("add", undefined);
                }
            }
        });
    }

    showPopup(popupMode, data) {
        this.mode = popupMode;
        this.formData = data !== undefined ? data : {};
        
        this.popupTitle = popupMode === "add" ? "Add" : "Edit";

        this.popupVisible = true;
    }

    confirmClick(e) {
        let form = this.form.instance;
        let result = form.validate();
        let gridSource = this.grid.instance.getDataSource();
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

                this.popup.instance.hide();
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
                
                this.popup.instance.hide();
            }
        }
    }

    cancelClick(e) {
        this.popup.instance.hide();
    }

    source: any[] = [{
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
    }];
    

}
