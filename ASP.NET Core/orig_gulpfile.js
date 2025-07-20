/// <binding Clean='clean' />
const gulp = require("gulp"),
    rimraf = require("rimraf"),
    concat = require("gulp-concat");


const paths = {
    webroot: "./wwwroot/"
};

paths.concatJsDest = paths.webroot + "js/vendor.js";
paths.concatCssDest = paths.webroot + "css/vendor.css";
paths.fonts = paths.webroot + "css/fonts";
paths.icons = paths.webroot + "css/icons";

let defaultScripts = [
    "node_modules/jquery/dist/jquery.min.js",
    "node_modules/bootstrap/dist/js/bootstrap.min.js"],
    exportScripts = [
        "node_modules/jszip/dist/jszip.min.js",
        "node_modules/exceljs/dist/exceljs.min.js",
        "node_modules/file-saver/FileSaver.min.js"
    ],
    quillScripts = ["node_modules/devextreme-quill/dist/dx-quill.min.js",
        "node_modules/turndown/dist/turndown.js",
        "node_modules/showdown/dist/showdown.js"
    ],
    diagramScript = ["node_modules/devexpress-diagram/dist/dx-diagram.min.js"],
    ganttScript = ["node_modules/devexpress-gantt/dist/dx-gantt.min.js"],
    dxtScripts = [
        "node_modules/devextreme/dist/js/dx.all.js",
        "node_modules/devextreme/dist/js/dx.aspnet.mvc.js",
        "node_modules/devextreme-aspnet-data/js/dx.aspnet.data.js"];


let dxtStyles = [
    "node_modules/bootstrap/dist/css/bootstrap.css",
    "node_modules/devextreme/dist/css/dx.common.css",
    "node_modules/devextreme/dist/css/dx.light.css"],
    ganttStyles = ["node_modules/devexpress-gantt/dist/dx-gantt.min.css"],
    diagramStyles = ["node_modules/devexpress-diagram/dist/dx-diagram.min.css"];


/* default configuration */

let styles = dxtStyles;
let scripts = [...defaultScripts, ...dxtScripts];

/* // Gantt
scripts = [...defaultScripts, ...ganttScript, ...dxtScripts];
styles = [...styles, ...ganttStyles];  
*/

/* // Diagram 
scripts = [...defaultScripts, ...diagramScript, ...dxtScripts]; 
styles = [...styles, ...diagramStyles];
*/

/* // HtmlEditor 
scripts = [...defaultScripts, ...quillScripts, dxtScripts];
*/

/* // Export 
scripts = [...exportScripts, ...scripts];
*/

 /* // Full bundle 

scripts = [...exportScripts, ...defaultScripts, ...ganttScript, ...diagramScript, ...quillScripts, ...dxtScripts];
styles = [...dxtStyles, ...diagramStyles, ...ganttStyles];

*/


gulp.task("clean:js", function (cb) {
    rimraf(paths.concatJsDest, cb);
});

gulp.task("clean:css", function (cb) {
    rimraf(paths.concatCssDest, cb);
});
gulp.task("clean:icons", function (cb) {
    rimraf(paths.icons, cb);
});
gulp.task("clean:fonts", function (cb) {
    rimraf(paths.fonts, cb);
});

gulp.task("clean", gulp.series(["clean:js", "clean:css", "clean:icons", "clean:fonts"]));


gulp.task("add:js", function () {

    return gulp.src(scripts, { base: "." })
        .pipe(concat(paths.concatJsDest))
        .pipe(gulp.dest("."));
});

gulp.task("add:css", function () {
    return gulp.src(styles)
        .pipe(concat(paths.concatCssDest))
        .pipe(gulp.dest("."));
});

gulp.task("add:icons", function () {
    return gulp.src(["node_modules/devextreme/dist/css/icons/*"]).pipe(gulp.dest(paths.icons));
})
gulp.task("add:fonts", function () {
    return gulp.src(["node_modules/devextreme/dist/css/fonts/*"]).pipe(gulp.dest(paths.fonts));
})

gulp.task("add-resources", gulp.series(["add:js", "add:css", "add:icons", "add:fonts"]));