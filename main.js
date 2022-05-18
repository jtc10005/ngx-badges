(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!*******************************************************!*\
  !*** multi ./projects/ng-badges-showcase/src/main.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Omega\github\ng-badges\ngx-badges\projects\ng-badges-showcase\src\main.ts */"Mt6W");


/***/ }),

/***/ "8WbV":
/*!***********************************************************!*\
  !*** ./projects/ng-badges-showcase/src/app/app.module.ts ***!
  \***********************************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var projects_ngx_badges_src_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/ngx-badges/src/public-api */ "ebGu");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "96o4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], projects_ngx_badges_src_public_api__WEBPACK_IMPORTED_MODULE_1__["NgxBadgesModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], projects_ngx_badges_src_public_api__WEBPACK_IMPORTED_MODULE_1__["NgxBadgesModule"]] }); })();


/***/ }),

/***/ "96o4":
/*!**************************************************************!*\
  !*** ./projects/ng-badges-showcase/src/app/app.component.ts ***!
  \**************************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_badges_src_lib_ngx_badges_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ngx-badges/src/lib/ngx-badges.component */ "M9qf");


class AppComponent {
    constructor() {
        this.title = 'ng-badges-showcase';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 12, vars: 0, consts: [["text", "PRIMARY", "type", "PRIMARY"], ["text", "SUCCESS", "type", "SUCCESS"], ["text", "WARN", "type", "WARN"], ["text", "ERROR", "type", "ERROR"], ["text", "INFO", "type", "INFO"], ["text", "DEFAULT", "type", "DEFAULT"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "PRIMARY: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-badges", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\nSUCCESS: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ngx-badges", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\nWARN: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "ngx-badges", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\nERROR: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "ngx-badges", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\nINFO: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "ngx-badges", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\nDEFAULT: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "ngx-badges", 5);
    } }, directives: [_ngx_badges_src_lib_ngx_badges_component__WEBPACK_IMPORTED_MODULE_1__["NgxBadgesComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "M9qf":
/*!*************************************************************!*\
  !*** ./projects/ngx-badges/src/lib/ngx-badges.component.ts ***!
  \*************************************************************/
/*! exports provided: NgxBadgesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxBadgesComponent", function() { return NgxBadgesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class NgxBadgesComponent {
    constructor() {
        this.text = '';
        this.styleClass = 'badge';
        this.type = '';
    }
    ngOnInit() {
        if (this.type) {
            if (this.type.toUpperCase().indexOf('SUCCESS') != -1) {
                this.styleClass += ' badge-success';
            }
            else if (this.type.toUpperCase().indexOf('ERROR') != -1) {
                this.styleClass += ' badge-error';
            }
            else if (this.type.toUpperCase().indexOf('INFO') != -1) {
                this.styleClass += ' badge-info';
            }
            else if (this.type.toUpperCase().indexOf('PRIMARY') != -1) {
                this.styleClass += ' badge-primary';
            }
            else if (this.type.toUpperCase().indexOf('DEFAULT') != -1) {
                this.styleClass += ' badge-default';
            }
            else if (this.type.toUpperCase().indexOf('WARN') != -1) {
                this.styleClass += ' badge-warning';
            }
            else {
                this.styleClass += ' badge-primary';
            }
        }
        else {
            this.styleClass += ' badge-default';
        }
    }
}
NgxBadgesComponent.ɵfac = function NgxBadgesComponent_Factory(t) { return new (t || NgxBadgesComponent)(); };
NgxBadgesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgxBadgesComponent, selectors: [["ngx-badges"]], inputs: { text: "text", type: "type" }, decls: 2, vars: 3, template: function NgxBadgesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.text);
    } }, styles: [".badge-primary[_ngcontent-%COMP%] {\n      background-color: #337ab7!important;\n}\n  .badge-error[_ngcontent-%COMP%] {\n    background-color: #d9534f!important;\n        }\n        .badge-default[_ngcontent-%COMP%] {\n  background-color: #777!important;\n}\n        .badge-info[_ngcontent-%COMP%] {\n  background-color: #5bc0de!important;\n}\n        .badge-warning[_ngcontent-%COMP%] {\n  background-color: #f0ad4e!important;\n}\n        .badge-success[_ngcontent-%COMP%] {\n  background-color: #5cb85c!important;\n}\n        .badge[_ngcontent-%COMP%] {\n  display: inline;\n  padding: .2em .6em .3em;\n  font-size: 75 %;\n  font-weight: 700;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: .25em;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}"] });


/***/ }),

/***/ "Mt6W":
/*!*************************************************!*\
  !*** ./projects/ng-badges-showcase/src/main.ts ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "8WbV");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "b8FP");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "QMah":
/*!***********************************************************!*\
  !*** ./projects/ngx-badges/src/lib/ngx-badges.service.ts ***!
  \***********************************************************/
/*! exports provided: NgxBadgesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxBadgesService", function() { return NgxBadgesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class NgxBadgesService {
    constructor() { }
}
NgxBadgesService.ɵfac = function NgxBadgesService_Factory(t) { return new (t || NgxBadgesService)(); };
NgxBadgesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NgxBadgesService, factory: NgxBadgesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "b8FP":
/*!*********************************************************************!*\
  !*** ./projects/ng-badges-showcase/src/environments/environment.ts ***!
  \*********************************************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "ebGu":
/*!***********************************************!*\
  !*** ./projects/ngx-badges/src/public-api.ts ***!
  \***********************************************/
/*! exports provided: NgxBadgesService, NgxBadgesComponent, NgxBadgesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_ngx_badges_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/ngx-badges.service */ "QMah");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxBadgesService", function() { return _lib_ngx_badges_service__WEBPACK_IMPORTED_MODULE_0__["NgxBadgesService"]; });

/* harmony import */ var _lib_ngx_badges_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/ngx-badges.component */ "M9qf");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxBadgesComponent", function() { return _lib_ngx_badges_component__WEBPACK_IMPORTED_MODULE_1__["NgxBadgesComponent"]; });

/* harmony import */ var _lib_ngx_badges_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/ngx-badges.module */ "t4ha");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxBadgesModule", function() { return _lib_ngx_badges_module__WEBPACK_IMPORTED_MODULE_2__["NgxBadgesModule"]; });

/*
 * Public API Surface of ngx-badges
 */





/***/ }),

/***/ "t4ha":
/*!**********************************************************!*\
  !*** ./projects/ngx-badges/src/lib/ngx-badges.module.ts ***!
  \**********************************************************/
/*! exports provided: NgxBadgesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxBadgesModule", function() { return NgxBadgesModule; });
/* harmony import */ var _ngx_badges_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ngx-badges.component */ "M9qf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class NgxBadgesModule {
}
NgxBadgesModule.ɵfac = function NgxBadgesModule_Factory(t) { return new (t || NgxBadgesModule)(); };
NgxBadgesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NgxBadgesModule });
NgxBadgesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgxBadgesModule, { declarations: [_ngx_badges_component__WEBPACK_IMPORTED_MODULE_0__["NgxBadgesComponent"]], exports: [_ngx_badges_component__WEBPACK_IMPORTED_MODULE_0__["NgxBadgesComponent"]] }); })();


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map