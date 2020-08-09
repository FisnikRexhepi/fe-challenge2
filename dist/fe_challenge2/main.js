(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_datepicker_range_input_datepicker_range_input_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/datepicker-range-input/datepicker-range-input.component */ "./src/app/components/datepicker-range-input/datepicker-range-input.component.ts");
/* harmony import */ var _components_output_datepicker_range_output_datepicker_range_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/output-datepicker-range/output-datepicker-range.component */ "./src/app/components/output-datepicker-range/output-datepicker-range.component.ts");




class AppComponent {
    constructor() {
        this.arrayDateRanges = [];
        this.title = 'fe_challenge2';
    }
    addFirstDateRange(dates) {
        const tempArray = new Array(dates.fromDate, dates.toDate);
        this.arrayDateRanges[0] = tempArray;
    }
    addSecondDateRange(dates) {
        const tempArray = new Array(dates.fromDate, dates.toDate);
        this.arrayDateRanges[1] = tempArray;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 10, vars: 1, consts: [[1, "sidebar"], [1, "main-wrapper"], [1, "datepickers-wrapper"], [1, "time-range-title"], [3, "newItemEvent"], [3, "arrayDatesRanges"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "TIME RANGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-datepicker-input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("newItemEvent", function AppComponent_Template_app_datepicker_input_newItemEvent_7_listener($event) { return ctx.addFirstDateRange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "app-datepicker-input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("newItemEvent", function AppComponent_Template_app_datepicker_input_newItemEvent_8_listener($event) { return ctx.addSecondDateRange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-output-datepicker-range", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("arrayDatesRanges", ctx.arrayDateRanges);
    } }, directives: [_components_datepicker_range_input_datepicker_range_input_component__WEBPACK_IMPORTED_MODULE_1__["DatepickerRangeInputComponent"], _components_output_datepicker_range_output_datepicker_range_component__WEBPACK_IMPORTED_MODULE_2__["OutputDatepickerRangeComponent"]], styles: [".sidebar[_ngcontent-%COMP%] {\n  background: green;\n  height: 100%;\n  width: 400px;\n  padding: 10px;\n}\n.main-wrapper[_ngcontent-%COMP%] {\n  background-color: #334358;\n  width: 350px;\n  margin: 0 auto;\n  height: 204px;\n}\n.datepickers-wrapper[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  width: 310px;\n  padding-left: 0px;\n}\n.time-range-title[_ngcontent-%COMP%] {\n  color: #DBDBDB;\n  font-family: \"Open Sans\";\n  font-weight: lighter !important;\n  margin-bottom: 23px;\n  padding-top: 26px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvZ2xvYmFsL19jb2xvcnMuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHdEQUFBO0FDRUE7RUFDQyxpQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUFEO0FBR0E7RUFDQyx5QkRSc0I7RUNTdEIsWUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FBQUQ7QUFHQTtFQUNDLGNBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFBRDtBQUdBO0VBQ0MsY0RqQmlCO0VDa0JqQix3QkFBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUFEIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQWxsIGNvbG9ycyB1c2VkIGluIHRoZSBhcHBsaWNhdGlvbiBhcmUgcGxhY2VkIGhlcmUgICovXG4vLyBibHVlIGNvbG9yc1xuJGNvbG9yLW1haW4tZGFyay1ibHVlOiAjMzM0MzU4O1xuXG5cbi8vIGdyYXkgY29sb3JzXG4kY29sb3ItbWFpbi1ncmF5OiAjREJEQkRCO1xuJGNvbG9yLW1haW4tZGFyay1ncmF5OiAjNjY2QjcyOyIsIkBpbXBvcnQgJ35zcmMvc3R5bGVzL2dsb2JhbC9jb2xvcnMuc2Nzcyc7XG5cbi5zaWRlYmFye1xuXHRiYWNrZ3JvdW5kOiBncmVlbjtcblx0aGVpZ2h0OiAxMDAlO1xuXHR3aWR0aDogNDAwcHg7XG5cdHBhZGRpbmc6IDEwcHg7XG59XG5cbi5tYWluLXdyYXBwZXJ7XG4gYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLW1haW4tZGFyay1ibHVlO1xuIHdpZHRoOiAzNTBweDtcbiBtYXJnaW46MCBhdXRvO1xuIGhlaWdodDogMjA0cHg7XG59XG5cbi5kYXRlcGlja2Vycy13cmFwcGVye1xuXHRtYXJnaW46IDAgYXV0bztcblx0d2lkdGg6IDMxMHB4O1xuXHRwYWRkaW5nLWxlZnQ6IDBweDtcbn1cblxuLnRpbWUtcmFuZ2UtdGl0bGV7XG5cdGNvbG9yOiAkY29sb3ItbWFpbi1ncmF5O1xuXHRmb250LWZhbWlseTonT3BlbiBTYW5zJztcblx0Zm9udC13ZWlnaHQ6IGxpZ2h0ZXIgIWltcG9ydGFudDtcblx0bWFyZ2luLWJvdHRvbTogMjNweDtcblx0cGFkZGluZy10b3A6IDI2cHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/datepicker-range-input/datepicker-range-input.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/datepicker-range-input/datepicker-range-input.component.ts ***!
  \***************************************************************************************/
/*! exports provided: DatepickerRangeInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatepickerRangeInputComponent", function() { return DatepickerRangeInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




const _c0 = ["datepicker"];
const _c1 = ["myRangeInput"];
function DatepickerRangeInputComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatepickerRangeInputComponent_ng_template_6_Template_span_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const date_r4 = ctx.date; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onDateSelection(date_r4, $event.target); })("mouseenter", function DatepickerRangeInputComponent_ng_template_6_Template_span_mouseenter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const date_r4 = ctx.date; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.hoveredDate = date_r4; })("mouseleave", function DatepickerRangeInputComponent_ng_template_6_Template_span_mouseleave_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.hoveredDate = null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const date_r4 = ctx.date;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("range", ctx_r3.isFrom(date_r4) || ctx_r3.isTo(date_r4) || ctx_r3.isInside(date_r4) || ctx_r3.isHovered(date_r4))("faded", ctx_r3.isHovered(date_r4) || ctx_r3.isInside(date_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", date_r4.day, " ");
} }
// constants
const now = new Date();
const equals = (one, two) => one && two && two.year === one.year && two.month === one.month && two.day === one.day;
const before = (one, two) => !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day < two.day : one.month < two.month : one.year < two.year;
const after = (one, two) => !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day > two.day : one.month > two.month : one.year > two.year;
class DatepickerRangeInputComponent {
    constructor(renderer, parserFormatter) {
        this.renderer = renderer;
        this.parserFormatter = parserFormatter;
        this.fromAndToDateArray = [];
        this.newItemEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isHovered = date => this.fromDate && !this.toDate && this.hoveredDate && after(date, this.fromDate) && before(date, this.hoveredDate);
        this.isInside = date => after(date, this.fromDate) && before(date, this.toDate);
        this.isFrom = date => equals(date, this.fromDate);
        this.isTo = date => equals(date, this.toDate);
    }
    ngOnInit() {
        // set maximum and minimum (years, month and dates) of calendar.
        this.maxDate = { year: now.getFullYear() + 10, month: now.getMonth() + 1, day: now.getDate() };
        this.minDate = { year: now.getFullYear() - 10, month: now.getMonth() + 1, day: now.getDate() };
    }
    //  set choosed date from user within input fields
    // and emit those values to parent component
    onDateSelection(date) {
        let parsed = '';
        if (!this.fromDate && !this.toDate) {
            this.fromDate = date;
        }
        else if (this.fromDate && !this.toDate && after(date, this.fromDate)) {
            this.toDate = date;
            this.input.close();
        }
        else {
            this.toDate = null;
            this.fromDate = date;
        }
        parsed += !this.toDate ? this.parserFormatter.format(this.fromDate) :
            `${this.parserFormatter.format(this.fromDate)} - ${this.parserFormatter.format(this.toDate)}`;
        this.renderer.setProperty(this.myRangeInput.nativeElement, 'value', parsed);
        this.newItemEvent.emit({ fromDate: this.fromDate, toDate: this.toDate });
    }
}
DatepickerRangeInputComponent.ɵfac = function DatepickerRangeInputComponent_Factory(t) { return new (t || DatepickerRangeInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateParserFormatter"])); };
DatepickerRangeInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DatepickerRangeInputComponent, selectors: [["app-datepicker-input"]], viewQuery: function DatepickerRangeInputComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.myRangeInput = _t.first);
    } }, outputs: { newItemEvent: "newItemEvent" }, decls: 10, vars: 7, consts: [[1, "form-inline"], [1, "form-group"], [1, "input-group"], ["name", "datepicker", "ngbDatepicker", "", "placeholder", "dd. mmm yyyy - dd. mmm yyyy", "autocomplete", "off", 1, "form-control", 3, "autoClose", "displayMonths", "dayTemplate", "outsideDays", "startDate", "maxDate", "minDate"], ["myRangeInput", "", "datepicker", "ngbDatepicker"], ["t", ""], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-secondary", "calendar", 3, "click"], [1, "custom-day", 3, "click", "mouseenter", "mouseleave"]], template: function DatepickerRangeInputComponent_Template(rf, ctx) { if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DatepickerRangeInputComponent_ng_template_6_Template, 2, 5, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatepickerRangeInputComponent_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return _r1.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autoClose", true)("displayMonths", 2)("dayTemplate", _r2)("outsideDays", "hidden")("startDate", ctx.fromDate)("maxDate", ctx.maxDate)("minDate", ctx.minDate);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbInputDatepicker"]], styles: [".form-inline[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n  background-color: #334358 !important;\n}\n[_ngcontent-%COMP%]::placeholder {\n  color: #666B72 !important;\n}\nbutton.calendar[_ngcontent-%COMP%], button.calendar[_ngcontent-%COMP%]:active {\n  width: 2.75rem;\n  background-image: url('calendar.png') !important;\n  background-repeat: no-repeat;\n  background-size: 20px;\n  width: 50px;\n  background-position: 50%;\n}\n.input-group[_ngcontent-%COMP%]    > .form-control[_ngcontent-%COMP%]:not(:last-child), .input-group[_ngcontent-%COMP%]    > .custom-select[_ngcontent-%COMP%]:not(:last-child) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  background-color: #334358 !important;\n  border-width: 1px !important;\n  color: #DBDBDB !important;\n  width: 261px;\n  height: 50px;\n}\n.input-group[_ngcontent-%COMP%]    > .input-group-append[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%] {\n  border-color: #DBDBDB;\n}\n.custom-day[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0.185rem 0.25rem;\n  display: inline-block;\n  height: 2rem;\n  width: 2rem;\n}\n.custom-day.focused[_ngcontent-%COMP%] {\n  background-color: #e6e6e6;\n}\n.custom-day.range[_ngcontent-%COMP%], .custom-day[_ngcontent-%COMP%]:hover {\n  background-color: #0275d8;\n  color: white;\n}\n.custom-day.faded[_ngcontent-%COMP%] {\n  background-color: rgba(2, 117, 216, 0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvZ2xvYmFsL19jb2xvcnMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9kYXRlcGlja2VyLXJhbmdlLWlucHV0L2RhdGVwaWNrZXItcmFuZ2UtaW5wdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0RBQUE7QUNHQTtFQUNJLG1CQUFBO0VBQ0Esb0NBQUE7QUFESjtBQUlBO0VBQ0UseUJBQUE7QUFERjtBQUtBO0VBQ0ksY0FBQTtFQUNBLGdEQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtBQUZKO0FBTUE7RUFDSSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0NBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFISjtBQUtBO0VBQ0kscUJEM0JjO0FDeUJsQjtBQUtBO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFGSjtBQUlFO0VBQ0UseUJBQUE7QUFESjtBQUdFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FBQUo7QUFFRTtFQUNFLHdDQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2RhdGVwaWNrZXItcmFuZ2UtaW5wdXQvZGF0ZXBpY2tlci1yYW5nZS1pbnB1dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEFsbCBjb2xvcnMgdXNlZCBpbiB0aGUgYXBwbGljYXRpb24gYXJlIHBsYWNlZCBoZXJlICAqL1xuLy8gYmx1ZSBjb2xvcnNcbiRjb2xvci1tYWluLWRhcmstYmx1ZTogIzMzNDM1ODtcblxuXG4vLyBncmF5IGNvbG9yc1xuJGNvbG9yLW1haW4tZ3JheTogI0RCREJEQjtcbiRjb2xvci1tYWluLWRhcmstZ3JheTogIzY2NkI3MjsiLCJAaW1wb3J0ICd+c3JjL3N0eWxlcy9nbG9iYWwvY29sb3JzLnNjc3MnO1xuXG5cbi5mb3JtLWlubGluZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItbWFpbi1kYXJrLWJsdWUgIWltcG9ydGFudDtcbn1cblxuOjpwbGFjZWhvbGRlcntcbiAgY29sb3I6ICRjb2xvci1tYWluLWRhcmstZ3JheSAhaW1wb3J0YW50O1xufVxuXG5cbmJ1dHRvbi5jYWxlbmRhciwgYnV0dG9uLmNhbGVuZGFyOmFjdGl2ZSB7XG4gICAgd2lkdGg6IDIuNzVyZW07XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2NhbGVuZGFyLnBuZycpIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMjBweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCU7XG59XG5cblxuLmlucHV0LWdyb3VwID4gLmZvcm0tY29udHJvbDpub3QoOmxhc3QtY2hpbGQpLCAuaW5wdXQtZ3JvdXAgPiAuY3VzdG9tLXNlbGVjdDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItbWFpbi1kYXJrLWJsdWUgIWltcG9ydGFudDtcbiAgICBib3JkZXItd2lkdGg6IDFweCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAkY29sb3ItbWFpbi1ncmF5ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDI2MXB4O1xuICAgIGhlaWdodDogNTBweDtcbn1cbi5pbnB1dC1ncm91cCA+IC5pbnB1dC1ncm91cC1hcHBlbmQgPiAuYnRuIHtcbiAgICBib3JkZXItY29sb3I6ICRjb2xvci1tYWluLWdyYXk7XG59XG5cbi5jdXN0b20tZGF5IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMC4xODVyZW0gMC4yNXJlbTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgaGVpZ2h0OiAycmVtO1xuICAgIHdpZHRoOiAycmVtO1xuICB9XG4gIC5jdXN0b20tZGF5LmZvY3VzZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XG4gIH1cbiAgLmN1c3RvbS1kYXkucmFuZ2UsIC5jdXN0b20tZGF5OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMiwgMTE3LCAyMTYpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAuY3VzdG9tLWRheS5mYWRlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyLCAxMTcsIDIxNiwgMC41KTtcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatepickerRangeInputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-datepicker-input',
                templateUrl: './datepicker-range-input.component.html',
                styleUrls: ['./datepicker-range-input.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateParserFormatter"] }]; }, { input: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['datepicker']
        }], myRangeInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['myRangeInput']
        }], newItemEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/output-datepicker-range/output-datepicker-range.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/output-datepicker-range/output-datepicker-range.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: OutputDatepickerRangeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutputDatepickerRangeComponent", function() { return OutputDatepickerRangeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pipes_full_length_date_format_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pipes/full-length-date-format.pipe */ "./src/app/pipes/full-length-date-format.pipe.ts");




function OutputDatepickerRangeComponent_div_0_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "fullLengthDateFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "fullLengthDateFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, value_r2[0]), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, value_r2[1]), " ");
} }
function OutputDatepickerRangeComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Selected Dates");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, OutputDatepickerRangeComponent_div_0_li_6_Template, 4, 6, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.arrayDatesRanges);
} }
class OutputDatepickerRangeComponent {
    constructor() { }
}
OutputDatepickerRangeComponent.ɵfac = function OutputDatepickerRangeComponent_Factory(t) { return new (t || OutputDatepickerRangeComponent)(); };
OutputDatepickerRangeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OutputDatepickerRangeComponent, selectors: [["app-output-datepicker-range"]], inputs: { arrayDatesRanges: "arrayDatesRanges" }, decls: 1, vars: 1, consts: [["class", "date-ranges-wrapper", 4, "ngIf"], [1, "date-ranges-wrapper"], [1, "card"], [1, "card-header", "text-center"], [1, "header-title"], [1, "list-group", "list-group-item-dark"], ["class", "list-group-item text-center alert-secondary", 4, "ngFor", "ngForOf"], [1, "list-group-item", "text-center", "alert-secondary"]], template: function OutputDatepickerRangeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, OutputDatepickerRangeComponent_div_0_Template, 7, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.arrayDatesRanges.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], pipes: [_pipes_full_length_date_format_pipe__WEBPACK_IMPORTED_MODULE_2__["FullLengthDateFormatPipe"]], styles: [".date-ranges-wrapper[_ngcontent-%COMP%] {\n  background-color: #666B72;\n  width: 400px;\n}\n.header-title[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\" !important;\n  font-weight: normal !important;\n}\n.card[_ngcontent-%COMP%] {\n  border-radius: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvZ2xvYmFsL19jb2xvcnMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9vdXRwdXQtZGF0ZXBpY2tlci1yYW5nZS9vdXRwdXQtZGF0ZXBpY2tlci1yYW5nZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3REFBQTtBQ0VBO0VBQ0kseUJESW1CO0VDSG5CLFlBQUE7QUFBSjtBQUdBO0VBQ0MsbUNBQUE7RUFDQSw4QkFBQTtBQUFEO0FBR0E7RUFDQyw2QkFBQTtBQUFEIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9vdXRwdXQtZGF0ZXBpY2tlci1yYW5nZS9vdXRwdXQtZGF0ZXBpY2tlci1yYW5nZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEFsbCBjb2xvcnMgdXNlZCBpbiB0aGUgYXBwbGljYXRpb24gYXJlIHBsYWNlZCBoZXJlICAqL1xuLy8gYmx1ZSBjb2xvcnNcbiRjb2xvci1tYWluLWRhcmstYmx1ZTogIzMzNDM1ODtcblxuXG4vLyBncmF5IGNvbG9yc1xuJGNvbG9yLW1haW4tZ3JheTogI0RCREJEQjtcbiRjb2xvci1tYWluLWRhcmstZ3JheTogIzY2NkI3MjsiLCJAaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMvZ2xvYmFsL2NvbG9ycyc7XG5cbi5kYXRlLXJhbmdlcy13cmFwcGVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1tYWluLWRhcmstZ3JheTtcbiAgICB3aWR0aDogNDAwcHg7XG59XG5cbi5oZWFkZXItdGl0bGV7XG5cdGZvbnQtZmFtaWx5OidPcGVuIFNhbnMnICFpbXBvcnRhbnQ7XG5cdGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcbn1cblxuLmNhcmR7IFxuIGJvcmRlci1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OutputDatepickerRangeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-output-datepicker-range',
                templateUrl: './output-datepicker-range.component.html',
                styleUrls: ['./output-datepicker-range.component.scss']
            }]
    }], function () { return []; }, { arrayDatesRanges: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/pipes/full-length-date-format.pipe.ts":
/*!*******************************************************!*\
  !*** ./src/app/pipes/full-length-date-format.pipe.ts ***!
  \*******************************************************/
/*! exports provided: FullLengthDateFormatPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullLengthDateFormatPipe", function() { return FullLengthDateFormatPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



class FullLengthDateFormatPipe extends _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"] {
    transform(value, args) {
        if (value) {
            const date = new Date(value.year, value.month - 1, value.day);
            return super.transform(date, 'dd. MMMM yyyy');
        }
    }
}
FullLengthDateFormatPipe.ɵfac = function FullLengthDateFormatPipe_Factory(t) { return ɵFullLengthDateFormatPipe_BaseFactory(t || FullLengthDateFormatPipe); };
FullLengthDateFormatPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "fullLengthDateFormat", type: FullLengthDateFormatPipe, pure: true });
const ɵFullLengthDateFormatPipe_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](FullLengthDateFormatPipe);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FullLengthDateFormatPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'fullLengthDateFormat'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/services/custom-date-format.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/custom-date-format.service.ts ***!
  \********************************************************/
/*! exports provided: CustomDateParserFormatterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomDateParserFormatterService", function() { return CustomDateParserFormatterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");



const fullMonths = ['January', 'February', 'Mars', 'April',
    'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
class CustomDateParserFormatterService extends _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateParserFormatter"] {
    parse(value) {
        if (value) {
            const dateParts = value.trim().split('/');
            if (dateParts.length === 1 && dateParts[0]) {
                return { year: +dateParts[0], month: null, day: null };
            }
            else if (dateParts.length === 2 && dateParts[0] && dateParts[1]) {
                return { year: +dateParts[1], month: +dateParts[0], day: null };
            }
            else if (dateParts.length === 3 && dateParts[0] && dateParts[1] && dateParts[2]) {
                return { year: +dateParts[2], month: +dateParts[1], day: +dateParts[0] };
            }
        }
    }
    format(date) {
        let stringDate = '';
        if (date) {
            stringDate += date.day ? date.day + '. ' : '';
            stringDate += date.month ? fullMonths[date.month - 1].substring(0, 3) + ' ' : '';
            stringDate += date.year;
        }
        return stringDate;
    }
}
CustomDateParserFormatterService.ɵfac = function CustomDateParserFormatterService_Factory(t) { return ɵCustomDateParserFormatterService_BaseFactory(t || CustomDateParserFormatterService); };
CustomDateParserFormatterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CustomDateParserFormatterService, factory: CustomDateParserFormatterService.ɵfac });
const ɵCustomDateParserFormatterService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](CustomDateParserFormatterService);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomDateParserFormatterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/services/output-datepicker-range.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/output-datepicker-range.service.ts ***!
  \*************************************************************/
/*! exports provided: OutputDatepickerRangeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutputDatepickerRangeService", function() { return OutputDatepickerRangeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class OutputDatepickerRangeService {
    constructor() {
        this.observer = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.subcriber$ = this.observer.asObservable();
    }
    emitSelectedDate(date) {
        this.observer.next(date);
    }
}
OutputDatepickerRangeService.ɵfac = function OutputDatepickerRangeService_Factory(t) { return new (t || OutputDatepickerRangeService)(); };
OutputDatepickerRangeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OutputDatepickerRangeService, factory: OutputDatepickerRangeService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OutputDatepickerRangeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _components_datepicker_range_input_datepicker_range_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/datepicker-range-input/datepicker-range-input.component */ "./src/app/components/datepicker-range-input/datepicker-range-input.component.ts");
/* harmony import */ var _components_output_datepicker_range_output_datepicker_range_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/output-datepicker-range/output-datepicker-range.component */ "./src/app/components/output-datepicker-range/output-datepicker-range.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _services_custom_date_format_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/custom-date-format.service */ "./src/app/services/custom-date-format.service.ts");
/* harmony import */ var _services_output_datepicker_range_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/output-datepicker-range.service */ "./src/app/services/output-datepicker-range.service.ts");
/* harmony import */ var _pipes_full_length_date_format_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pipes/full-length-date-format.pipe */ "./src/app/pipes/full-length-date-format.pipe.ts");










class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, providers: [
        { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDateParserFormatter"], useClass: _services_custom_date_format_service__WEBPACK_IMPORTED_MODULE_6__["CustomDateParserFormatterService"],
        },
        _services_output_datepicker_range_service__WEBPACK_IMPORTED_MODULE_7__["OutputDatepickerRangeService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
        ], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_datepicker_range_input_datepicker_range_input_component__WEBPACK_IMPORTED_MODULE_3__["DatepickerRangeInputComponent"],
        _components_output_datepicker_range_output_datepicker_range_component__WEBPACK_IMPORTED_MODULE_4__["OutputDatepickerRangeComponent"],
        _pipes_full_length_date_format_pipe__WEBPACK_IMPORTED_MODULE_8__["FullLengthDateFormatPipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]], exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _components_datepicker_range_input_datepicker_range_input_component__WEBPACK_IMPORTED_MODULE_3__["DatepickerRangeInputComponent"],
        _components_output_datepicker_range_output_datepicker_range_component__WEBPACK_IMPORTED_MODULE_4__["OutputDatepickerRangeComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _components_datepicker_range_input_datepicker_range_input_component__WEBPACK_IMPORTED_MODULE_3__["DatepickerRangeInputComponent"],
                    _components_output_datepicker_range_output_datepicker_range_component__WEBPACK_IMPORTED_MODULE_4__["OutputDatepickerRangeComponent"],
                    _pipes_full_length_date_format_pipe__WEBPACK_IMPORTED_MODULE_8__["FullLengthDateFormatPipe"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                ],
                exports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _components_datepicker_range_input_datepicker_range_input_component__WEBPACK_IMPORTED_MODULE_3__["DatepickerRangeInputComponent"],
                    _components_output_datepicker_range_output_datepicker_range_component__WEBPACK_IMPORTED_MODULE_4__["OutputDatepickerRangeComponent"],
                ],
                providers: [
                    { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDateParserFormatter"], useClass: _services_custom_date_format_service__WEBPACK_IMPORTED_MODULE_6__["CustomDateParserFormatterService"],
                    },
                    _services_output_datepicker_range_service__WEBPACK_IMPORTED_MODULE_7__["OutputDatepickerRangeService"]
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/fisnik.rexhepi/fe_challenge2/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map