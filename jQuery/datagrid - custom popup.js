$(function () {
    const key = "ID";
    let rowData = {},
        mode;
    let popup, grid, form;

    grid = $("#grid").dxDataGrid({
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
            for (let i = 0; i < toolbarItems.length; i++) {
                let item = toolbarItems[i];
                if (item.name === "addRowButton") {
                    item.options.onClick = function(e) {
                        showPopup("Add", {})
                    };
                    break;
                }
            }
        },
        columns: ["ID", "CompanyName", "Zipcode", "Website", {
            type: "buttons",
            buttons: [{
                name: "edit",
                onClick: function (e) {
                    showPopup("Edit", e.row.data)
                }
            }, "delete"]

        }]
    }).dxDataGrid("instance");

    popup = $("#popup").dxPopup({
        contentTemplate: popupTemplate,
        closeOnOutsideClick: true,
        toolbarItems: [{
            widget: "dxButton",
            location: "after",
            toolbar: "bottom",
            options: {
                text: "Confirm",
                type: "success",
                onClick: function (x) {
                    let result = form.validate();
                    if (result.isValid) {
                        let data = form.option("formData"),
                            gridSource = grid.getDataSource(),
                            gridStore = gridSource.store();

                        if (mode === "Add")
                            gridStore.push([{ type: "insert", data: data }]);
                        else if (mode === "Edit")
                            gridStore.push([{ type: "update", data: data, key: data[key] }]);

                        gridSource.reload();
                        popup.hide();
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
                onClick: function () {
                    popup.hide();
                }
            }
        }]
    }).dxPopup('instance')

    function showPopup(popupMode, data) {
        mode = popupMode;

        if (form)
            form.option('formData', { ...data })
        else
            rowData = { ...data };

        popup.option({
            title: popupMode,
            visible: true
        })
    }

    function popupTemplate(e) {
        let formElement = $("<div>")
        form = formElement.dxForm({
            formData: rowData,
            labelLocation: "top",
            showColonAfterLabel: true,
            colCountByScreen: {
                lg: 2,
                md: 2,
                sm: 1,
                xs: 1
            },
            items: [{
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
            }]
        }).dxForm('instance');
        
        e.append(formElement);
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