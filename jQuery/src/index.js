$(function () {
    let rowData = {},
        formMode,
        form;

    const validationRules = {
        firstName: [
            { type: 'required', message: 'First Name is required.' }
        ],
        lastName: [
            { type: 'required', message: 'Last Name is required.' }
        ],
        phone: [
            { type: 'required', message: 'Phone number is required.' }
        ],
        email: [
            { type: 'email', message: 'Email is incorrect.' }
        ],
        birthDate: [
            { 
                type: 'required', 
                message: 'Birth Date is required.', 
                invalidDateMessage: 'The date must have the following format: mm/dd/yyyy'
            },
        ],
    };

    const labelTemplate = (iconName) => 
        (data) => $(`<div><i class='dx-icon dx-icon-${iconName}'></i>${data.text}</div>`);

    const popupTemplate = (e) => {
        let formElement = $('<div>');

        form = formElement.dxForm({
            formData: rowData,
            showColonAfterLabel: true,
            items: [{
                itemType: 'group',
                colCount: 2,
                items: [{
                    dataField: 'FirstName',
                    validationRules: validationRules.firstName,
                    label: {
                        template: labelTemplate('user')
                    },
                }, {
                    dataField: 'Position',
                    editorType: 'dxSelectBox',
                    editorOptions: {
                        items: positions,
                        searchEnabled: true,
                    },
                    label: {
                        template: labelTemplate('info')
                    },
                }, {
                    dataField: 'LastName',
                    validationRules: validationRules.lastName,
                    label: {
                        template: labelTemplate('user')
                    },
                }, {
                    dataField: 'Address',
                    label: {
                        template: labelTemplate('home')
                    },
                }, {
                    dataField: 'BirthDate',
                    editorType: 'dxDateBox',
                    validationRules: validationRules.birthDate,
                    label: {
                        template: labelTemplate('event')
                    },
                }, { 
                    dataField: 'HireDate',
                    editorType: 'dxDateBox',
                    label: {
                        template: labelTemplate('event')
                    },
                }, {
                    colSpan: 2,
                    dataField: 'Notes',
                    editorType: 'dxTextArea',
                    editorOptions: {
                        height: 90,
                        maxLength: 200
                    },
                    label: {
                        template: (data, element) => {
                            const lineBreak = '<br>';
                            const infoIcon = '<i id="helpedInfo" class="dx-icon dx-icon-info"></i>';
                            const labelText = `Additional${lineBreak}${data.text}`;
                
                            element.append(`<div id='template-content'>${infoIcon}${labelText}</div>`)
                
                            $('<div>').dxTooltip({
                                target: '#helpedInfo',
                                showEvent: 'mouseenter',
                                hideEvent: 'mouseleave',
                                contentTemplate(args) {
                                    args.html('<div id="tooltip-content">This field must not exceed 200 characters</div>')
                                },
                            }).appendTo(element);
                        },
                    },
                }, {
                    dataField: 'Phone',
                    validationRules: validationRules.phone,
                    editorOptions: {
                        mask: '+1 (X00) 000-0000', 
                        maskRules: { X: /[02-9]/ },
                        maskInvalidMessage: 'The phone must have a correct USA phone format'
                    },
                    label: {
                        template: labelTemplate('tel')
                    },
                }, {
                    dataField: 'Email',
                    validationRules: validationRules.email,
                    label: {
                        template: labelTemplate('email')
                    },
                }],
            }],
        }).dxForm('instance');
    
        e.append(formElement);
    };

    const grid = $('#grid').dxDataGrid({
        showBorders: true,
        showColumnLines: true,
        showRowLines: true,
        repaintChangesOnly: true,
        dataSource:  new DevExpress.data.DataSource({
            store: {
                type: 'array',
                data: employees,
                key: 'ID',
            }
        }),
        editing: {
            allowUpdating: true,
            allowAdding: true,
            allowDeleting: true,
            useIcons: true,
            mode: 'popup'
        },
        columns: [
            { dataField: 'FirstName', dataType: 'string' },
            { dataField: 'LastName', dataType: 'string' },
            { dataField: 'BirthDate', dataType: 'date' },
            { dataField: 'Position', dataType: 'string', width: 170 },
            { dataField: 'HireDate', dataType: 'date' },
            { dataField: 'Address', dataType: 'string' },
            {
                type: 'buttons',
                buttons: [{
                    name: 'edit',
                    onClick: (e) => {
                        showPopup('Edit', e.row.data)
                    }
                }, 'delete']
            }
        ],
        toolbar: {
            items: [
                {
                    widget: 'dxButton',
                    options: {
                        icon: 'plus',
                        onClick: () => {
                            showPopup('Add', {})
                        }
                    },
                },
            ],
        },
    }).dxDataGrid('instance');

    const popup = $('#popup').dxPopup({
        contentTemplate: popupTemplate,
        hideOnOutsideClick: true,
        height: 420,
        toolbarItems: [{
            widget: 'dxButton',
            location: 'after',
            toolbar: 'bottom',
            options: {
                text: 'Confirm',
                type: 'success',
                onClick: () => {
                    let result = form.validate();

                    if (result.isValid) {
                        let data = form.option('formData'),
                            gridSource = grid.getDataSource(),
                            gridStore = gridSource.store();

                        if (formMode === 'Add')
                            gridStore.insert(data)
                        else if (formMode === 'Edit')
                            gridStore.update(data['ID'], data)

                        grid.refresh(true)
                        popup.hide()
                    }
                }
            }
        }, {
            widget: 'dxButton',
            location: 'after',
            toolbar: 'bottom',
            options: {
                text: 'Cancel',
                toolbar: 'bottom',
                onClick: () => {
                    popup.hide()
                }
            }
        }]
    }).dxPopup('instance');

    const showPopup = (popupMode, data) => {
        formMode = popupMode;

        if (form)
            form.option('formData', { ...data })
        else
            rowData = { ...data }

        popup.option({
            title: popupMode,
            visible: true
        })
    };
});