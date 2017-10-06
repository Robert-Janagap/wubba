webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- User logged in -->\n<div *ngIf=\"authService.loggedIn()\" class=\"grid\">\n    <app-navbar class=\"dashboard-header\"></app-navbar>\n    <app-dashboard-navbar class=\"dashboard-sidebarNav\"></app-dashboard-navbar>\n    <div class=\"dashboard-content\">\n        <router-outlet></router-outlet>\n    </div>\n</div>\n<!-- If user not logged in -->\n<div *ngIf=\"!authService.loggedIn()\">\n    <app-navbar></app-navbar>\n    <router-outlet></router-outlet>\n    <app-footer></app-footer>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_todo_service__ = __webpack_require__("../../../../../src/app/services/todo.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(authService, todoService) {
        this.authService = authService;
        this.todoService = todoService;
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_todo_service__["a" /* TodoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_todo_service__["a" /* TodoService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_dashboard_navbar_dashboard_navbar_component__ = __webpack_require__("../../../../../src/app/components/dashboard-navbar/dashboard-navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_history_history_component__ = __webpack_require__("../../../../../src/app/components/history/history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_statistics_statistics_component__ = __webpack_require__("../../../../../src/app/components/statistics/statistics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_settings_settings_component__ = __webpack_require__("../../../../../src/app/components/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_todo_service__ = __webpack_require__("../../../../../src/app/services/todo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__guards_guard__ = __webpack_require__("../../../../../src/app/guards/guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Cores






// Components










// Services



// Guards

// Routes
var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_9__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__guards_guard__["a" /* AuthGuard */]] },
    { path: 'history', component: __WEBPACK_IMPORTED_MODULE_13__components_history_history_component__["a" /* HistoryComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__guards_guard__["a" /* AuthGuard */]] },
    { path: 'statistics', component: __WEBPACK_IMPORTED_MODULE_14__components_statistics_statistics_component__["a" /* StatisticsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__guards_guard__["a" /* AuthGuard */]] },
    { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_15__components_settings_settings_component__["a" /* SettingsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__guards_guard__["a" /* AuthGuard */]] },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_dashboard_navbar_dashboard_navbar_component__["a" /* DashboardNavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_history_history_component__["a" /* HistoryComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_statistics_statistics_component__["a" /* StatisticsComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_settings_settings_component__["a" /* SettingsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_16__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_17__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_19__guards_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_18__services_todo_service__["a" /* TodoService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard-navbar/dashboard-navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".siderbarNav-items span{\r\n    font-size: .8em;\r\n    text-transform: capitalize;\r\n}\r\n.siderbarNav-items span:before{\r\n    font-size: 2em;\r\n    display: block;\r\n    margin-left: 0;\r\n}\r\n.siderbarNav-items li{\r\n    margin: 2rem 0;\r\n}\r\n.siderbarNav-items{\r\n    padding: 0;\r\n    margin: 0;\r\n    list-style: none;\r\n    text-align: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard-navbar/dashboard-navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"siderbarNav-items\">\n  <li [routerLinkActiveOptions]= \"{exact:true}\" [routerLinkActive]= \"['active']\"><a [routerLink]=\"['/dashboard']\"><span class=\"flaticon-yoga\">Dashboard</span></a></li>\n  <li [routerLinkActiveOptions]= \"{exact:true}\" [routerLinkActive]= \"['active']\"><a [routerLink]=\"['/history']\"><span class=\"flaticon-history\">History</span></a></li>\n  <li [routerLinkActiveOptions]= \"{exact:true}\" [routerLinkActive]= \"['active']\"><a [routerLink]=\"['/statistics']\"><span class=\"flaticon-pie-chart\">statistics</span></a></li>\n  <li [routerLinkActiveOptions]= \"{exact:true}\" [routerLinkActive]= \"['active']\"><a [routerLink]=\"['/settings']\"><span class=\"flaticon-settings\">settings</span></a></li>\n</ul>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard-navbar/dashboard-navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardNavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardNavbarComponent = (function () {
    function DashboardNavbarComponent() {
    }
    DashboardNavbarComponent.prototype.ngOnInit = function () {
    };
    return DashboardNavbarComponent;
}());
DashboardNavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard-navbar',
        template: __webpack_require__("../../../../../src/app/components/dashboard-navbar/dashboard-navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard-navbar/dashboard-navbar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DashboardNavbarComponent);

//# sourceMappingURL=dashboard-navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tasks{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n}\r\n.tasks-item{\r\n    background: #fff;\r\n    padding: 0.6rem .4rem;\r\n    text-transform: capitalize;\r\n    border-radius: 2px;\r\n    box-shadow: 0 2px 5px rgba(0,0,0,0.4);\r\n    margin: .8rem 1rem .8rem .4rem;\r\n}\r\n.tasks-title{\r\n    cursor: pointer;\r\n}\r\n.todo-input{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    width: 200px;\r\n}\r\n.tasks-item input:checked + span{\r\n    text-decoration: line-through;\r\n    color: #afafaf;\r\n}\r\n.tasks-item span:before{\r\n    font-size: .8rem;\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<form action=\"\">\n    <div *ngIf=\"!editVisible\"  class=\"form-group todo-input\">\n      <input type=\"text\" placeholder=\"Add Todo\" [(ngModel)]=\"todo\" name=\"todo\">\n      <span class=\"flaticon-add pointer\" (click)=\"onAddTodoClick()\"></span>\n    </div>\n    <div *ngIf=\"editVisible\" class=\"form-group todo-input\"  >\n      <input type=\"text\" placeholder=\"Add Todo\" [(ngModel)]=\"updatedTodo\" name=\"updatedTodo\">\n      <input *ngIf=\"edited\" type=\"text\" placeholder=\"\" [(ngModel)]=\"idTodo\" name=\"idTodo\">\n      <span class=\"flaticon-pen update\" (click)=\"onUpdateTaskClick()\"></span>\n    </div>\n  </form>\n  <div class=\"tasks\">\n    <div class=\"tasks-item\" *ngFor=\"let task of tasks\">\n      <label for={{task.task_id}} class=\"tasks-title\">\n        <input type=\"checkbox\" id={{task.task_id}}>\n        <span>{{task.task}}</span>\n      </label>\n      <span class=\"flaticon-pen edit\" (click)=\"onEditTaskClick(task.task, task.task_id)\"></span>\n      <span class=\"flaticon-cross-out\" (click)=\"onDeleteTaskClick(task.task_id)\"></span>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_todo_service__ = __webpack_require__("../../../../../src/app/services/todo.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = (function () {
    function DashboardComponent(authService, todoService) {
        this.authService = authService;
        this.todoService = todoService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user.user;
            _this.user_id = profile.user._id;
        }, function (err) {
            return false;
        });
        this.getTask();
    };
    DashboardComponent.prototype.getTask = function () {
        var _this = this;
        this.todoService.getTask().subscribe(function (tasks) {
            _this.tasks = tasks;
        });
    };
    DashboardComponent.prototype.onAddTodoClick = function () {
        var _this = this;
        var user_id = localStorage.getItem('user_id');
        var task_id = (this.todo + '-' + Math.floor((Math.random() * 9999) + 1000)).replace(/\s+/g, '-').toLowerCase();
        var newTodo = {
            task: this.todo,
            user_id: user_id,
            task_id: task_id,
            done: false
        };
        this.todoService.addTask(newTodo).subscribe(function (task) {
            _this.getTask();
            _this.todo = "";
        });
    };
    DashboardComponent.prototype.onEditTaskClick = function (task, task_id) {
        this.editVisible = true;
        this.updatedTodo = task;
        this.idTodo = task_id;
    };
    DashboardComponent.prototype.onUpdateTaskClick = function () {
        var _this = this;
        this.editVisible = false;
        var updateTask = {
            task: this.updatedTodo,
            task_id: this.idTodo,
            user_id: this.user_id
        };
        this.todoService.updateTask(updateTask).subscribe(function (data) {
            _this.getTask();
        });
    };
    DashboardComponent.prototype.onDeleteTaskClick = function (taskId) {
        var _this = this;
        this.todoService.deleteTask(taskId).subscribe(function (data) {
            _this.getTask();
        });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_todo_service__["a" /* TodoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_todo_service__["a" /* TodoService */]) === "function" && _b || Object])
], DashboardComponent);

var _a, _b;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\n  <div class=\"container footer-content\">\n    <p>All rights reserved © 2017 Wubba.com</p>\n    <ul>\n      <li><a href=\"/facebook\"><span class=\"flaticon-youtube\"></span></a></li>\n      <li><a href=\"/youtube\"><span class=\"flaticon-twitter\"></span></a></li>\n      <li><a href=\"/twitter\"><span class=\"flaticon-facebook\"></span></a></li>\n    </ul>\n  </div>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/history/history.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/history/history.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  history works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/history/history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HistoryComponent = (function () {
    function HistoryComponent() {
    }
    HistoryComponent.prototype.ngOnInit = function () {
    };
    return HistoryComponent;
}());
HistoryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-history',
        template: __webpack_require__("../../../../../src/app/components/history/history.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/history/history.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HistoryComponent);

//# sourceMappingURL=history.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tagline-header{\r\n    margin-top: 0;\r\n    margin-bottom: .4rem;\r\n    text-transform: capitalize;\r\n}\r\n.tagline-subHeader{\r\n    font-size: 1.4em;\r\n    width: 74%;\r\n}\r\n.tagline{\r\n    color: #fff;\r\n}\r\n.banner{\r\n    padding-top: 10rem;\r\n    padding-bottom: 5rem;\r\n    background: url(/assets/images/wubba-banner.jpg) no-repeat;\r\n    background-size: cover;\r\n    height: 55vh;\r\n    background-position: center center;\r\n}\r\n.banner-form{\r\n    width: 30%;\r\n    border: 1px solid #8e8e8e;\r\n    padding: 1rem;\r\n    border-radius: 2px;\r\n    background: #fff;\r\n}\r\n.banner-container{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n}\r\n.row-header{\r\n    text-transform: capitalize;\r\n    margin-top: 0;\r\n}\r\n.section .row-header{\r\n    margin-top: 1.4rem;\r\n}\r\n.row{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    padding-top: 1.8rem;\r\n    padding-bottom: 2.8rem;\r\n    border-bottom: 1px solid #b7b7b7;\r\n    width: 100%;\r\n}\r\n.row-header.center,\r\n.row-content.center{\r\n    text-align: center;\r\n    padding: 0 .6rem;\r\n}\r\n.feature-section .row-content{\r\n    width: 100%;\r\n}\r\n.features{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    margin-top: 1.2rem;\r\n}\r\n.features .feature{\r\n    text-align: center;\r\n}\r\n.features .feature span:before{\r\n    margin-left: 0;\r\n    font-size: 4em;\r\n}\r\n.feature-title{\r\n    font-size: 1.2em;\r\n    text-transform: capitalize;\r\n    font-weight: 900;\r\n}\r\n.row-header .border{\r\n    display: inline-block;\r\n}\r\n.row-header.center .border:after{\r\n    margin: 0 auto;\r\n    margin-top: 0.5rem;\r\n}\r\n.row-header .border:after{\r\n    display: block;\r\n    content: '';\r\n    width: 50%;\r\n    height: 1px;\r\n    background: #007BE6;\r\n    margin-top: 0.5rem;\r\n}\r\n.section p{\r\n    padding-right: 1.5rem;\r\n}\r\n.feature-content{\r\n    margin-top: 0.4rem;\r\n    font-size: .8rem;\r\n    padding: 0 0.8rem;\r\n}\r\n.row-content{\r\n    width: 100%;\r\n}\r\n.contact-form{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    width: 75%;\r\n    margin: 0 auto;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n}\r\n.contact-form .form-group{\r\n    width: 49%;\r\n}\r\n.contact-form .form-group:not(:last-child) input{\r\n    border: 0;\r\n    border-bottom: 1px solid #b7b7b7;\r\n    margin: 0;\r\n    background: transparent;\r\n    outline: 0;\r\n}\r\n.contact-form .textarea{\r\n    width: 100%;\r\n    resize: none;\r\n}\r\n.contact-form textarea{\r\n    width: 97%;\r\n    padding: .3rem .5rem;\r\n}\r\n.contact-form  input[type=\"submit\"]{\r\n    display: inline-block;\r\n    width: auto;\r\n}\r\n.container .row:last-child{\r\n    border-bottom: none;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"banner cf\">\n  <div class=\"container\">\n    <div class=\"banner-container\">\n      <div class=\"tagline\">\n        <h2 class=\"tagline-header\">\n          You'll regret doing nothing today\n        </h2>\n        <div class=\"tagline-subHeader\">\n          More and more people using wubba, Try it and use it again the next day.\n        </div>\n      </div>\n      <form (submit)=\"onRegisterSubmit()\" class=\"banner-form\">\n        <flash-messages></flash-messages>\n        <div class=\"form-group\">\n          <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" placeholder=\"Full Name\">\n        </div>\n        <div class=\"form-group\">\n            <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" placeholder=\"Email\">\n          </div>\n        <div class=\"form-group\">\n            <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" placeholder=\"Password\">\n        </div>\n        <input type=\"submit\" value=\"Sign-up now\" class=\"btn btn-primary btn-lg\">\n      </form>\n    </div>\n  </div>\n</div>\n<div class=\"container\">\n  <div class=\"row section\" id=\"about\">\n    <div class=\"row-content center\">\n      <h3 class=\"row-header center\"><div class=\"border\">Its all about you</div></h3>\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates quia, atque suscipit laudantium, consequuntur molestiae nisi eveniet repellendus illum quaerat odit. Saepe quos, quibusdam officia natus quia pariatur culpa, minus.</p>\n      <div class=\"btn btn-primary\">get started</div>\n    </div>\n    <div class=\"row-image\">\n      <img src=\"/assets/images/wubba-about.jpg\" alt=\"\">\n    </div>\n  </div>\n  <div class=\"row feature-section\" id=\"features\">\n    <div class=\"row-content\">\n      <h3 class=\"row-header center\"><div class=\"border\">Features</div></h3>\n      <div class=\"features\">\n        <div class=\"feature\">\n          <span class=\"flaticon-time-management-1\"></span>\n          <div class=\"feature-title\">user friendly</div>\n          <p class=\"feature-content\">repellendus illum quaerat odit. Saepe quos, quibusdam officia natus quia pariatur culpa, minus.</p>\n        </div>\n        <div class=\"feature\">\n          <span class=\"flaticon-history-1\"></span>\n          <div class=\"feature-title\">work history</div>\n          <p class=\"feature-content\">repellendus illum quaerat odit. Saepe quos, quibusdam officia natus quia pariatur culpa, minus.</p>\n        </div>\n        <div class=\"feature\">\n          <span class=\"flaticon-bar-chart\"></span>\n          <div class=\"feature-title\">improve workflow</div>\n          <p class=\"feature-content\">repellendus illum quaerat odit. Saepe quos, quibusdam officia natus quia pariatur culpa, minus.</p>\n        </div>\n        <div class=\"feature\">\n          <span class=\"flaticon-planning\"></span>\n          <div class=\"feature-title\">effectiveness</div>\n          <p class=\"feature-content\">repellendus illum quaerat odit. Saepe quos, quibusdam officia natus quia pariatur culpa, minus.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row section\" id=\"tutorial\">\n    <div class=\"row-image\">\n      <img src=\"/assets/images/wubba-tutorial.jpg\" alt=\"\">\n    </div>\n    <div class=\"row-content center\">\n        <h3 class=\"row-header center\"><div class=\"border\">how to become wubba master</div></h3>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates quia, atque suscipit laudantium, consequuntur molestiae nisi eveniet repellendus illum quaerat odit. Saepe quos, quibusdam officia natus quia pariatur culpa, minus.</p>\n        <div class=\"btn btn-primary\">get started</div>\n      </div>\n  </div>\n  <div class=\"row\" id=\"contact\">\n    <div class=\"row-content\">\n      <h3 class=\"row-header center\"><div class=\"border\">Show me what you got?</div></h3>\n      <form action=\"\" class=\"contact-form\">\n        <div class=\"form-group\">\n          <label for=\"\">Name</label>\n          <input type=\"text\" placeholder=\"\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"\">Email</label>\n            <input type=\"text\" placeholder=\"\">\n        </div>\n        <div class=\"form-group textarea\">\n            <textarea name=\"\" id=\"\" cols=\"30\" rows=\"10\" placeholder=\"Your message\"></textarea>\n        </div>\n        <input type=\"submit\" value=\"submit\" class=\"btn btn-primary btn-lg\">\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = (function () {
    function HomeComponent(authService, flashMessages, validateService, router) {
        this.authService = authService;
        this.flashMessages = flashMessages;
        this.validateService = validateService;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var newUser = {
            name: this.name,
            email: this.email,
            password: this.password
        };
        // Validate all fields
        if (!this.validateService.validateRegister(newUser)) {
            this.flashMessages.show('Fill All Fields', { cssClass: 'message-error', timeout: 3000 });
            return false;
        }
        // Validate if email is correct 
        if (!this.validateService.validateEmail(newUser.email)) {
            this.flashMessages.show('Invalid Email', { cssClass: 'message-error', timeout: 3000 });
            return false;
        }
        // User registration
        this.authService.registerUser(newUser).subscribe(function (data) {
            if (data) {
                _this.router.navigate(['/dashboard']);
            }
            else {
                console.log('no data');
            }
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _d || Object])
], HomeComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-form{\r\n    border: 1px solid #8e8e8e;\r\n    padding: 1rem;\r\n    border-radius: 2px;\r\n    background: #fff;\r\n    width: 30%;\r\n}\r\n.login-form input[type=\"submit\"]{\r\n    width: 100%;\r\n}\r\n.login-header{\r\n    text-transform: capitalize;\r\n    text-align: center;\r\n    margin-bottom: 3rem;\r\n}\r\n.login-content{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    margin-bottom: 5rem;\r\n}\r\n.login-image{\r\n    width: 40%;\r\n}\r\n.login-image img{\r\n    width: 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2 class=\"login-header\">ready your teleportation gun</h2>\n  <div class=\"login-content\">\n    <div class=\"login-image\">\n      <img src=\"/assets/images/wubba.jpeg\" alt=\"\">\n    </div>\n    <form (submit)=\"onLoginSubmit()\" class=\"login-form\">\n      <flash-messages></flash-messages>\n      <div class=\"form-group\">\n        <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" placeholder=\"email\">\n      </div>\n      <div class=\"form-group\">\n        <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" placeholder=\"Password\">\n      </div>\n      <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, flashMessage, router) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            email: this.email,
            password: this.password
        };
        this.authService.loginUser(user).subscribe(function (user) {
            if (user.success) {
                _this.authService.storeData(user.token, user.user, user.user_id);
                _this.flashMessage.show(user.msg, {
                    cssClass: 'message-success',
                    timeout: 5000
                });
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.flashMessage.show(user.msg, {
                    cssClass: 'message-error',
                    timeout: 5000
                });
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-header{\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n.main-header .logo span:before{\r\n    font-size: 2.4rem;\r\n    margin-left: 0;\r\n}\r\n.main-nav ul{\r\n    padding: 0;\r\n    margin: 0;\r\n    list-style: none;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n.main-nav a{\r\n    margin-left: 2rem;\r\n    text-transform: capitalize;\r\n}\r\n.main-headerContainer{\r\n    padding: 12px 0;\r\n    box-shadow: 0px 1px 3px rgba(0,0,0,0.3);\r\n    position: relative;\r\n    z-index: 2;\r\n}\r\n.logo-title{\r\n    font-family: 'Merriweather';\r\n    display: inline-block;\r\n    font-size: 1.4em;\r\n}\r\n.main-dashboardHeader{\r\n    padding: 0 .7rem;\r\n    height: 100%;\r\n}\r\n.main-dashboardHeader .form-group{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    margin-bottom: 0;\r\n}\r\n.main-dashboardHeaderContainer{\r\n    height: 100%;\r\n    padding: 0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"main-headerContainer\" *ngIf=\"!authService.loggedIn()\">\n  <div class=\"container\">\n      <nav class=\"main-header\">\n        <a href=\"\" class=\"logo\" [routerLink]=\"['/']\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]= \"{exact:true}\">\n          <span class=\"flaticon-yoga\"></span>\n          <span class=\"logo-title\">Wubba</span>\n        </a>\n        <div class=\"main-nav\">\n          <ul>\n            <li><a href=\"#about\">about</a></li>\n            <li><a href=\"#features\">features</a></li>\n            <li><a href=\"#tutorial\">tutorial</a></li>\n            <li><a href=\"#contact\">contact</a></li>\n            <li [routerLinkActive]= \"['active']\" [routerLinkActiveOptions]= \"{exact:true}\"><a [routerLink]=\"['/login']\">login</a></li>\n          </ul>\n          <ul >\n              \n          </ul>\n        </div>\n      </nav>\n  </div>\n</header>\n\n<header class=\"main-headerContainer main-dashboardHeaderContainer\" *ngIf=\"authService.loggedIn()\">\n  <nav class=\"main-header main-dashboardHeader\">\n    <div></div>\n    <div class=\"main-nav\">\n      <ul>\n          <li><a (click)=\"onLogOutClick()\" href=\"#\">Logout</a></li>\n      </ul>\n    </div>\n  </nav>\n</header>"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_todo_service__ = __webpack_require__("../../../../../src/app/services/todo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, todoService, router) {
        this.authService = authService;
        this.todoService = todoService;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogOutClick = function () {
        this.authService.logOut();
        this.router.navigate(['/login']);
        return false;
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_todo_service__["a" /* TodoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_todo_service__["a" /* TodoService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object])
], NavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/settings/settings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  settings works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsComponent = (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    return SettingsComponent;
}());
SettingsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-settings',
        template: __webpack_require__("../../../../../src/app/components/settings/settings.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/settings/settings.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SettingsComponent);

//# sourceMappingURL=settings.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/statistics/statistics.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/statistics/statistics.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  statistics works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/statistics/statistics.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatisticsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StatisticsComponent = (function () {
    function StatisticsComponent() {
    }
    StatisticsComponent.prototype.ngOnInit = function () {
    };
    return StatisticsComponent;
}());
StatisticsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-statistics',
        template: __webpack_require__("../../../../../src/app/components/statistics/statistics.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/statistics/statistics.component.css")]
    }),
    __metadata("design:paramtypes", [])
], StatisticsComponent);

//# sourceMappingURL=statistics.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=guard.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.post('/users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.loginUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.post('/users/auth', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeData = function (token, user, user_id) {
        localStorage.setItem('token', token);
        localStorage.setItem('user', user);
        localStorage.setItem('user_id', user_id);
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('token');
        this.authToken = token;
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('/users/dashboard', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.logOut = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])();
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/todo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoService = (function () {
    function TodoService(http) {
        this.http = http;
    }
    TodoService.prototype.addTask = function (newTask) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.post('/todo/task', newTask, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TodoService.prototype.getTask = function () {
        var user_id = localStorage.getItem('user_id');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.get('/todo/' + user_id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TodoService.prototype.updateTask = function (task) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.put('/todo/' + task.user_id, task, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TodoService.prototype.deleteTask = function (task_id) {
        var user_id = localStorage.getItem('user_id');
        var task = {
            task_id: task_id
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.put('/todo/delete/' + user_id, task)
            .map(function (res) { return res.json(); });
    };
    return TodoService;
}());
TodoService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], TodoService);

var _a;
//# sourceMappingURL=todo.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name === undefined || user.email === undefined || user.password === undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    return ValidateService;
}());
ValidateService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ValidateService);

//# sourceMappingURL=validate.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map