webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(116);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_hammerjs__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_guard__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_app_app_component__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_user_login_login_component__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_shared_navmenu_navmenu_component__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_shared_header_header_component__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_shared_footer_footer_component__ = __webpack_require__(113);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












// export const firebaseConfig = {
//     apiKey: "AIzaSyBeGxpiDkiIAASm8neB7E8IrfN_Zz8vbng",
//     authDomain: "gapp-def88.firebaseapp.com",
//     databaseURL: "https://gapp-def88.firebaseio.com",
//     projectId: "gapp-def88",
//     storageBucket: "gapp-def88.appspot.com",
//     messagingSenderId: "479758522425"
// };
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__components_app_app_component__["a" /* AppComponent */]],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__components_app_app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_user_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_shared_navmenu_navmenu_component__["a" /* NavmenuComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_shared_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_shared_footer_footer_component__["a" /* FooterComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_4__services_auth_guard__["a" /* Guard */]],
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_user_login_login_component__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_guard__ = __webpack_require__(70);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var appRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_4__services_auth_guard__["a" /* Guard */]], },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(appRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
        ]
    })
], AppRoutingModule);

//# sourceMappingURL=app.routing.module.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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
    function AppComponent() {
    }
    return AppComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Object)
], AppComponent.prototype, "sidenav", void 0);
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(178),
        styles: [__webpack_require__(171)]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'shared-footer',
        template: __webpack_require__(180),
        styles: [__webpack_require__(173)]
    })
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'shared-header',
        template: __webpack_require__(181),
        styles: [__webpack_require__(174)]
    })
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavmenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavmenuComponent = (function () {
    function NavmenuComponent() {
        this.user = {
            firstName: "Ashot",
            lastName: "Nazaryan",
            location: "Yerevan",
            about: "tra la la"
        };
    }
    return NavmenuComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Object)
], NavmenuComponent.prototype, "sidenav", void 0);
NavmenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'shared-navmenu',
        template: __webpack_require__(182),
        styles: [__webpack_require__(175)]
    }),
    __metadata("design:paramtypes", [])
], NavmenuComponent);

//# sourceMappingURL=navmenu.component.js.map

/***/ }),

/***/ 116:
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

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "/*colors*/\n/*resolutions*/\n.center {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\n.app-container .sidenav {\n  width: 300px;\n  background-color: #f2f2f2; }\n\n.app-container .sidenav-button {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 99; }\n\n.app-container shared-header {\n  position: absolute;\n  width: 100%;\n  top: 0;\n  left: 0; }\n\n.app-container shared-footer {\n  display: block;\n  position: absolute;\n  width: 100%;\n  bottom: 0; }\n\n.app-container .main-container {\n  min-height: 100vh;\n  height: 100%;\n  padding: 40px 0;\n  box-sizing: border-box; }\n\n.gapp-button.primary {\n  background-color: #1aa3ff !important;\n  color: #f2f2f2; }\n\n.gapp-button.success {\n  background-color: #66ff66 !important;\n  color: #f2f2f2; }\n\n.gapp-button.warning {\n  color: #990000; }\n  .gapp-button.warning:hover {\n    background-color: #ffb366; }\n\n.gapp-button.default {\n  color: #101010; }\n  .gapp-button.default:hover {\n    background-color: #b4b4b4; }\n\n.right {\n  float: right; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "/*colors*/\n/*resolutions*/\n.center {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\n.app-container .sidenav {\n  width: 300px;\n  background-color: #f2f2f2; }\n\n.app-container .sidenav-button {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 99; }\n\n.app-container shared-header {\n  position: absolute;\n  width: 100%;\n  top: 0;\n  left: 0; }\n\n.app-container shared-footer {\n  display: block;\n  position: absolute;\n  width: 100%;\n  bottom: 0; }\n\n.app-container .main-container {\n  min-height: 100vh;\n  height: 100%;\n  padding: 40px 0;\n  box-sizing: border-box; }\n\n.gapp-button.primary {\n  background-color: #1aa3ff !important;\n  color: #f2f2f2; }\n\n.gapp-button.success {\n  background-color: #66ff66 !important;\n  color: #f2f2f2; }\n\n.gapp-button.warning {\n  color: #990000; }\n  .gapp-button.warning:hover {\n    background-color: #ffb366; }\n\n.gapp-button.default {\n  color: #101010; }\n  .gapp-button.default:hover {\n    background-color: #b4b4b4; }\n\n.right {\n  float: right; }\n\n.home-container {\n  padding: 10px 15px; }\n  .home-container span {\n    margin: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "/*colors*/\n/*resolutions*/\n.center {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\n.app-container .sidenav {\n  width: 300px;\n  background-color: #f2f2f2; }\n\n.app-container .sidenav-button {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 99; }\n\n.app-container shared-header {\n  position: absolute;\n  width: 100%;\n  top: 0;\n  left: 0; }\n\n.app-container shared-footer {\n  display: block;\n  position: absolute;\n  width: 100%;\n  bottom: 0; }\n\n.app-container .main-container {\n  min-height: 100vh;\n  height: 100%;\n  padding: 40px 0;\n  box-sizing: border-box; }\n\n.gapp-button.primary {\n  background-color: #1aa3ff !important;\n  color: #f2f2f2; }\n\n.gapp-button.success {\n  background-color: #66ff66 !important;\n  color: #f2f2f2; }\n\n.gapp-button.warning {\n  color: #990000; }\n  .gapp-button.warning:hover {\n    background-color: #ffb366; }\n\n.gapp-button.default {\n  color: #101010; }\n  .gapp-button.default:hover {\n    background-color: #b4b4b4; }\n\n.right {\n  float: right; }\n\n.footer-container {\n  background-color: #66ff66; }\n  .footer-container p {\n    margin: 0;\n    text-align: center;\n    color: #f2f2f2;\n    padding: 0.5em 0; }\n    .footer-container p md-icon {\n      position: relative;\n      top: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "/*colors*/\n/*resolutions*/\n.center {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\n.app-container .sidenav {\n  width: 300px;\n  background-color: #f2f2f2; }\n\n.app-container .sidenav-button {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 99; }\n\n.app-container shared-header {\n  position: absolute;\n  width: 100%;\n  top: 0;\n  left: 0; }\n\n.app-container shared-footer {\n  display: block;\n  position: absolute;\n  width: 100%;\n  bottom: 0; }\n\n.app-container .main-container {\n  min-height: 100vh;\n  height: 100%;\n  padding: 40px 0;\n  box-sizing: border-box; }\n\n.gapp-button.primary {\n  background-color: #1aa3ff !important;\n  color: #f2f2f2; }\n\n.gapp-button.success {\n  background-color: #66ff66 !important;\n  color: #f2f2f2; }\n\n.gapp-button.warning {\n  color: #990000; }\n  .gapp-button.warning:hover {\n    background-color: #ffb366; }\n\n.gapp-button.default {\n  color: #101010; }\n  .gapp-button.default:hover {\n    background-color: #b4b4b4; }\n\n.right {\n  float: right; }\n\n.header-container {\n  height: 40px;\n  padding: 0 0 0 50px;\n  border-bottom: 1px solid #66ff66;\n  background-color: #66ff66;\n  box-shadow: 0 1px 10px #66ff66; }\n  .header-container button {\n    height: 40px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "/*colors*/\n/*resolutions*/\n.center {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\n.app-container .sidenav {\n  width: 300px;\n  background-color: #f2f2f2; }\n\n.app-container .sidenav-button {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 99; }\n\n.app-container shared-header {\n  position: absolute;\n  width: 100%;\n  top: 0;\n  left: 0; }\n\n.app-container shared-footer {\n  display: block;\n  position: absolute;\n  width: 100%;\n  bottom: 0; }\n\n.app-container .main-container {\n  min-height: 100vh;\n  height: 100%;\n  padding: 40px 0;\n  box-sizing: border-box; }\n\n.gapp-button.primary {\n  background-color: #1aa3ff !important;\n  color: #f2f2f2; }\n\n.gapp-button.success {\n  background-color: #66ff66 !important;\n  color: #f2f2f2; }\n\n.gapp-button.warning {\n  color: #990000; }\n  .gapp-button.warning:hover {\n    background-color: #ffb366; }\n\n.gapp-button.default {\n  color: #101010; }\n  .gapp-button.default:hover {\n    background-color: #b4b4b4; }\n\n.right {\n  float: right; }\n\n.navmenu-container {\n  height: 100%;\n  padding: 10px;\n  box-sizing: border-box; }\n  .navmenu-container .card .avatar {\n    background-image: url(" + __webpack_require__(241) + ");\n    background-size: cover;\n    width: 60px;\n    height: 60px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "/*colors*/\n/*resolutions*/\n.center, .login-container .login-form {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\n.app-container .sidenav {\n  width: 300px;\n  background-color: #f2f2f2; }\n\n.app-container .sidenav-button {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 99; }\n\n.app-container shared-header {\n  position: absolute;\n  width: 100%;\n  top: 0;\n  left: 0; }\n\n.app-container shared-footer {\n  display: block;\n  position: absolute;\n  width: 100%;\n  bottom: 0; }\n\n.app-container .main-container {\n  min-height: 100vh;\n  height: 100%;\n  padding: 40px 0;\n  box-sizing: border-box; }\n\n.gapp-button.primary {\n  background-color: #1aa3ff !important;\n  color: #f2f2f2; }\n\n.gapp-button.success {\n  background-color: #66ff66 !important;\n  color: #f2f2f2; }\n\n.gapp-button.warning {\n  color: #990000; }\n  .gapp-button.warning:hover {\n    background-color: #ffb366; }\n\n.gapp-button.default {\n  color: #101010; }\n  .gapp-button.default:hover {\n    background-color: #b4b4b4; }\n\n.right {\n  float: right; }\n\n.login-container .logo {\n  width: 200px;\n  margin: 20px auto 0 auto; }\n  .login-container .logo img {\n    width: 200px;\n    height: inherit; }\n\n.login-container .login-form {\n  width: 450px;\n  border: 1px solid #1aa3ff; }\n  @media (min-width: 421px) and (max-width: 767px) {\n    .login-container .login-form {\n      width: 100%;\n      box-sizing: border-box; } }\n  @media (max-width: 420px) {\n    .login-container .login-form {\n      width: 100%;\n      box-sizing: border-box; } }\n  .login-container .login-form .login-header {\n    background-color: #1aa3ff;\n    color: #f2f2f2; }\n    .login-container .login-form .login-header .material-icons {\n      font-size: 2em; }\n\n.login-container .form {\n  margin: 25px 0 10px 0;\n  padding: 0 10px; }\n\n.login-container .additional {\n  margin-top: 15px; }\n\n.login-container .full-width {\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 178:
/***/ (function(module, exports) {

module.exports = "\r\n<md-sidenav-container class=\"app-container\">\r\n  <md-sidenav #sidenav class=\"sidenav\">\r\n    <shared-navmenu [sidenav]=\"sidenav\"></shared-navmenu>\r\n  </md-sidenav>\r\n  <button md-icon-button (click)=\"sidenav.open()\" class=\"sidenav-button\">\r\n      <md-icon>menu</md-icon>\r\n  </button>\r\n  <shared-header></shared-header>\r\n  <div class=\"main-container\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n  <shared-footer></shared-footer>\r\n</md-sidenav-container>"

/***/ }),

/***/ 179:
/***/ (function(module, exports) {

module.exports = "<div class=\"home-container\">\r\n    <span>home</span>\r\n</div>"

/***/ }),

/***/ 180:
/***/ (function(module, exports) {

module.exports = "<div class=\"footer-container\">\r\n    <p>\r\n        <md-icon>copyright</md-icon> \r\n        <span>Copyright Ashot Nazaryan</span>\r\n    </p>\r\n</div>"

/***/ }),

/***/ 181:
/***/ (function(module, exports) {

module.exports = "<div class=\"header-container\">\r\n  <button md-button [mdMenuTriggerFor]=\"menu\">Menu</button>\r\n  <md-menu #menu=\"mdMenu\" [overlapTrigger]=\"false\">\r\n    <button md-menu-item>Item 1</button>\r\n    <button md-menu-item>Item 2</button>\r\n  </md-menu>\r\n  <button md-button [routerLink]=\"['/home']\">Home</button>\r\n</div>"

/***/ }),

/***/ 182:
/***/ (function(module, exports) {

module.exports = "<div class=\"navmenu-container\">\r\n    <md-card class=\"card\">\r\n        <md-card-header>\r\n            <div md-card-avatar class=\"avatar\">\r\n                <!--<img md-card-image src=\"assets/img/1.jpg\">-->\r\n            </div>\r\n            <md-card-title>\r\n                <md-icon>perm_contact_calendar</md-icon>\r\n                <span>{{user.firstName}}</span>\r\n                <span>{{user.lastName}}</span>\r\n            </md-card-title>\r\n            <md-card-subtitle>\r\n                <md-icon>room</md-icon>\r\n                <span>{{user.location}}</span>\r\n            </md-card-subtitle>\r\n        </md-card-header>\r\n        \r\n        <md-card-content>\r\n            <p>{{user.about}}</p>\r\n        </md-card-content>\r\n         <md-card-actions>\r\n            <button md-icon-button [routerLink]=\"['/login']\" (click)=\"sidenav.close()\">\r\n            <md-icon class=\"md-24\">power_settings_new</md-icon>\r\n                Logout\r\n            </button>\r\n        </md-card-actions>\r\n    </md-card>\r\n</div>"

/***/ }),

/***/ 183:
/***/ (function(module, exports) {

module.exports = "<div class=\"login-container\">\r\n    <div class=\"login-form\">\r\n        <md-toolbar class=\"login-header\">\r\n            <i class=\"material-icons\">lock_outline</i>\r\n            <span>Login</span>\r\n        </md-toolbar>\r\n        <md-card-content>\r\n            <form class=\"form\">\r\n                <md-input-container class=\"full-width\">\r\n                    <input mdInput>\r\n                    <md-placeholder>\r\n                        <md-icon>email</md-icon> Username\r\n                    </md-placeholder>\r\n                </md-input-container>\r\n                <md-input-container class=\"full-width\">\r\n                    <input mdInput type=\"password\" >\r\n                    <md-placeholder>\r\n                        <md-icon>lock</md-icon> Password\r\n                    </md-placeholder>\r\n                </md-input-container>\r\n                <a md-raised-button class=\"gapp-button primary\">Log In</a>\r\n                <a md-button class=\"gapp-button default right\">Cancel</a>\r\n                <div class=\"additional\">\r\n                    <a md-button class=\"gapp-button warning\">Forgot Password ?</a>\r\n                    <a md-raised-button class=\"gapp-button success right\">Sign Up</a>\r\n                </div>\r\n            </form>\r\n        </md-card-content>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1.baea3bde5cf3e13d092c.jpg";

/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(100);


/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'home',
        template: __webpack_require__(179),
        styles: [__webpack_require__(172)]
    })
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LoginComponent = (function () {
    function LoginComponent() {
    }
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'login',
        template: __webpack_require__(183),
        styles: [__webpack_require__(176)]
    })
], LoginComponent);

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(67);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Guard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Guard = (function () {
    function Guard(router) {
        this.router = router;
        this.user = localStorage.getItem('proovv_access_token');
    }
    Guard.prototype.canActivate = function () {
        //  if (this.user) {
        //     return true;
        //     // logged in so return true
        //     // this.router.navigate(['/dashboard']);
        // }
        // else {
        //     // // not logged in so redirect to login page
        //     //this.router.navigate(['/landing']);
        //     return false;
        // }
        return true;
    };
    return Guard;
}());
Guard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], Guard);

var _a;
//# sourceMappingURL=guard.js.map

/***/ }),

/***/ 99:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 99;


/***/ })

},[243]);
//# sourceMappingURL=main.bundle.js.map