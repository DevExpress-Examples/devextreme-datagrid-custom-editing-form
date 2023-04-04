<!-- default badges list -->
![](https://img.shields.io/endpoint?url=https://codecentral.devexpress.com/api/v1/VersionRange/263296064/22.2.5%2B)
[![](https://img.shields.io/badge/Open_in_DevExpress_Support_Center-FF7200?style=flat-square&logo=DevExpress&logoColor=white)](https://supportcenter.devexpress.com/ticket/details/T888862)
[![](https://img.shields.io/badge/📖_How_to_use_DevExpress_Examples-e9f6fc?style=flat-square)](https://docs.devexpress.com/GeneralInformation/403183)
<!-- default badges end -->
# DataGrid for DevExtreme - How to implement a custom editing form using the Popup and Form components

The DataGrid component supports [pop-up form editing](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/PopupEditing/jQuery/Light/) out of the box. To customize the form, follow this example to implement the [Popup](https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxPopup/) and [Form](https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxForm/) components.

![A custom editing form](devextreme-datagrid-custom-editing-form.png)

In the DataGrid, implement a function that customizes an **addRowButton**. The **addRowButton** displays the Popup component on click. Add a Form to the Popup [contentTemplate](https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#contentTemplate). Implement Popup [toolbar buttons](https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxPopup/Configuration/toolbarItems/) and call a function that updates the DataGrid data source on click after users fill in the Form.

## Files to Review

- **jQuery**
    - [index.html](jQuery/index.html)
- **Angular**
    - [app.component.html](Angular/src/app/app.component.html)
    - [app.component.ts](Angular/src/app/app.component.ts)
- **Vue**
    - [App.vue](Vue/src/App.vue)
- **React**
    - [App.js](React/src/App.js)
- **NetCore**    
    - [Index.cshtml](ASP.NET/SampleApp/Views/Home/Index.cshtml)

## Documentation

- [Getting Started with DataGrid](https://js.devexpress.com/Documentation/Guide/UI_Components/DataGrid/Getting_Started_with_DataGrid/)

- [DataGrid - API Reference](https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxDataGrid/)

## More Examples

- [DataGrid for DevExtreme - How to implement a custom editing form in ASP.NET MVC](https://github.com/DevExpress-Examples/devextreme-asp-net-mvc-datagrid-custom-editing-form)

- [DataGrid for DevExtreme - How to show/hide or enable/disable Edit Form items based on another item's value](https://github.com/DevExpress-Examples/DataGrid-How-to-hide-disable-Edit-Form-items-based-on-another-item-s-value)
