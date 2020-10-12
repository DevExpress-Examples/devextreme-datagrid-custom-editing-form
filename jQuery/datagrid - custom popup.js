$(function () {
    let key = "ID",
        rowData = {},
        mode,
    // popup instance
        popup = undefined;

    // datagrid
    let grid = $("#grid").dxDataGrid({
        dataSource: source,
        keyExpr: key,
        editing: {
            allowUpdating: true,
            allowAdding: true,
            allowDeleting: true,
            useIcons: true,
            mode: "popup"
        },
        onToolbarPreparing: function (e) {
            let toolbarItems = e.toolbarOptions.items;

            // customize addRow toolbar button
            toolbarItems.forEach((item) => {
                if (item.name === "addRowButton") {
                    item.options.onClick = (x) => {
                        showPopup("add");
                    }
                }
            });
        },
        columns: ["ID", "CompanyName", "Zipcode", "Website", {
            type: "buttons",

            // create edit and delete buttons
            buttons: [{
                name: "edit",
                onClick: function (e) {
                    showPopup("edit", e.row.data)
                }
            }, "delete"]

        }]
    }).dxDataGrid("instance");


    // shows popup
    // popupMode: string = "add" || "edit"
    // data: any; used for Form's formdata
    function showPopup(popupMode, data) {
        if (!popup) {
            popup = createPopUp(popupMode);
        }

        mode = popupMode;

        // popup only updates necessary options
        if (popupMode === "add") {
            popup.option({
                title: "Add",
                contentTemplate: function(e) { popupTemplate(e); }
            });

            rowData = undefined;
            
            popup.show();
        } else if (popupMode === "edit") {
            popup.option({
                title: "Edit",
                contentTemplate: function(e) { popupTemplate(e); }
            });

            rowData = data;
            
            popup.show();
        }
    }

    // create popup instance
    function createPopUp(popupMode) {
        let popupInstance = $("#popup").dxPopup({
            title: popupMode === "edit" ? "Edit" : "Add",
            closeOnOutsideClick: true,
            contentTemplate: popupTemplate,
            toolbarItems: [{
                widget: "dxButton",
                location: "after",
                toolbar: "bottom",
                options: {
                    text: "Confirm",
                    type: "success",
                    onClick: function (x) {
                        // get form instance by querying for Form
                        let form = $("#form").dxForm("instance");

                        if (mode === "edit") {
                            let result = form.validate();
                            if (result.isValid) {
                                let data = form.option("formData");

                                let gridSource = grid.getDataSource();
                                gridSource.store().push([
                                    {
                                        type: "update",
                                        data: data,
                                        key: data[key]
                                    }
                                ]);
                                gridSource.reload();

                                popup.hide();
                            }
                        } else if (mode === "add") {
                            let result = form.validate();
                            if (result.isValid) {
                                let data = form.option("formData");
                            
                                let gridSource = grid.getDataSource();
                                gridSource.store().push([
                                    {
                                        type: "insert",
                                        data: data
                                    }
                                ]);
                                gridSource.reload();
    
                                popup.hide();
                            }
                        }
                        
                    }
                }
            }, {
                widget: "dxButton",
                location: "after",
                toolbar: "bottom",
                options: {
                    text: "Cancel",
                    toolbar: "bottom",
                    onClick: function (x) {
                        popup.hide();
                    }
                }
            }]
        }).dxPopup("instance");
        return popupInstance;
    }

    // template for PopUp
    function popupTemplate(e) {
        e.append(
            $("<div />").attr("id", "form").dxForm(createForm(rowData, [{
                dataField: "ID",
                validationRules: [{
                    type: "required"
                }]
            }, {
                dataField: "CompanyName",
                validationRules: [{
                    type: "required"
                }]
            }, {
                dataField: "Zipcode",
                validationRules: [{
                    type: "required"
                }]
            }, { 
                dataField: "Website",
                validationRules: [{
                    type: "required"
                }]
            }])
            )
        );
    }

    // returns Form options
    // formData: any;
    // formItems: form.items[]; required. if none is detected, it will autogenerate items
    function createForm(formData, formItems) {
        if (!formItems) {
            DevExpress.ui.notify("createForm() requires 'formItems'", "warning", 5000);
        }

        return {
            formData: formData || {},
            labelLocation: "top",
            showColonAfterLabel: true,
            colCountByScreen: {
                lg: 2,
                md: 2,
                sm: 1,
                xs: 1
            },
            items: formItems
        }
    }
});

let source = [{
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