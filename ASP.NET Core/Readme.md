# ASP.NET Core

## Installation

Download the example and use Visual Studio 2019 to open the project. 

## Client-side resources and bundling

This project uses [NPM](http://npmjs.com/) and [Gulp.js](https://gulpjs.com/) to install client-side libraries. The project restores NPM packages before the first build. Then, Gulp bundles required scripts and CSS files into the resulting package during the first and every next build. 

The resulted bundles will be located in the `wwwroot` folder:
* `css/vendor.css` - a file with all CSS styles.
* `css/icons` and `css/fonts` - folders that contain fonts and icons for DevExtreme themes.
* `js/vendor.js` - a file that contains all scripts.

The default bundle includes jQuery, Bootstrap, and DevExtreme.

### Add more 3rd-party libraries for additional features/components 

The main logic is located in the the `gulpfile.js` file at the root application level. The file contains two tasks:

* the `add-resouces` task  

    * copies JavaScript files located in the `scripts` array and adds them to `vendor.js`. The script bundle is moved to `wwwroot\scripts`.
    * copies CSS styles located in the `styles` array and merges them into the `styles.css` bundle. Then, this bundle is moved to `wwwroot\styles`
    * copies DevExtreme `fonts` and `icons` folders from NPM  to `wwwroot\styles`

*  the `clean` task removes all previously created files (`vendor.js` and `vendor.css`) and folders (`icons` and `fonts`)

If you need to include more features, you can uncomment one of the following sections:

* Gantt - scripts and styles for [dxGantt](https://js.devexpress.com/DevExtreme/Guide/UI_Components/Gantt/Getting_Started_with_Gantt/).
* Diagram - scripts and styles for [dxDiagram](https://js.devexpress.com/DevExtreme/Guide/UI_Components/Diagram/Getting_Started_with_Diagram/).
* Export  - scripts and styles for the exporting feature: [Export Data to Excel](https://js.devexpress.com/DevExtreme/Guide/UI_Components/DataGrid/Getting_Started_with_DataGrid/#Export_Data_to_Excel). 
* HtmlEditor - scripts and styles for [dxHtmlEditor](https://js.devexpress.com/DevExtreme/Guide/UI_Components/HtmlEditor/Overview/).
* Full Bundle - scripts and styles for all above mentioned features/components.  

## Code

Take a look at the following files of this example to see the required code: 

A list of files goes here

## Development server

Use the Visual Studio `Run (F5)` command to run the project.

## Further help

You can learn more about the ASP.NET Core components' syntax in our documentation: [Concepts](https://docs.devexpress.com/AspNetCore/400574/devextreme-based-controls/concepts/razor-syntax)
The client-side API is based on jQuery [jQuery documentation](https://api.jquery.com/) and described in the following topics: 
* [Get and Set Properties](https://js.devexpress.com/DevExtreme/Guide/jQuery_Components/Component_Configuration_Syntax/#Get_and_Set_Properties)
* [Call Methods](https://js.devexpress.com/DevExtreme/Guide/jQuery_Components/Component_Configuration_Syntax/#Call_Methods)
* [Get a UI Component Instance](https://js.devexpress.com/DevExtreme/Guide/jQuery_Components/Component_Configuration_Syntax/#Get_a_UI_Component_Instance)

To get more help on DevExtreme submit an issue in the [Support Center](https://www.devexpress.com/Support/Center/Question/Create)


