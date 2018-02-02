webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

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

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__firebase_config__ = __webpack_require__("../../../../../src/app/firebase.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__email_email_component__ = __webpack_require__("../../../../../src/app/email/email.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__members_members_component__ = __webpack_require__("../../../../../src/app/members/members.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_10__email_email_component__["a" /* EmailComponent */],
                __WEBPACK_IMPORTED_MODULE_11__signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_12__members_members_component__["a" /* MembersComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser_animations__["b" /* NoopAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_3__firebase_config__["a" /* FirebaseConfig */].firebase),
                __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__["a" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_13__app_routes__["a" /* routes */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_14__auth_service__["a" /* AuthGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export router */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__members_members_component__ = __webpack_require__("../../../../../src/app/members/members.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__email_email_component__ = __webpack_require__("../../../../../src/app/email/email.component.ts");






var router = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__login_login_component__["a" /* LoginComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_4__signup_signup_component__["a" /* SignupComponent */] },
    { path: 'login-email', component: __WEBPACK_IMPORTED_MODULE_5__email_email_component__["a" /* EmailComponent */] },
    { path: 'members', component: __WEBPACK_IMPORTED_MODULE_2__members_members_component__["a" /* MembersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthGuard */]] }
];
var routes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(router);


/***/ }),

/***/ "../../../../../src/app/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/take.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        var _this = this;
        var user = this.auth.authState;
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Observable */].from(this.auth.authState)
            .take(1)
            .map(function (state) { return !!state; })
            .do(function (authenticated) {
            if (!authenticated)
                _this.router.navigate(['/login']);
        });
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/email/email.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/email/email.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-container\">\n  <a routerLink=\"/login\" id=\"goback\">Go back</a>\n  <h2>Custom Login</h2>\n\n  <span class=\"error\" *ngIf=\"error\" [@fallIn]='state'>{{ error }}</span>\n\n  <form #formData='ngForm' (ngSubmit)=\"onSubmit(formData)\">\n\n    <input type=\"text\" placeholder=\"Email address..\" (ngModel)=\"email\" name=\"email\" class=\"txt\" required>\n    <input type=\"password\" placeholder=\"Password\" (ngModel)=\"password\" name=\"password\" class=\"txt\" required>\n\n    <button type=\"submit\" [disabled]=\"!formData.valid\" class=\"basic-btn\">Log in</button>\n    <a routerLink=\"/signup\" class=\"alc\">Don't have an account?</a>\n</form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/email/email.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmailComponent = /** @class */ (function () {
    function EmailComponent(afAuth, router) {
        var _this = this;
        this.afAuth = afAuth;
        this.router = router;
        this.state = '';
        this.user = afAuth.authState; // only triggered on sign-in/out (for old behavior use .idToken)
        this.user.subscribe(function (auth) {
            if (auth) {
                _this.router.navigateByUrl('/members');
            }
        });
    }
    EmailComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        if (formData.valid) {
            console.log(formData.value);
            this.afAuth.auth.createUserWithEmailAndPassword(formData.value.email, formData.value.password).then(function (success) {
                console.log(success);
                _this.router.navigate(['/login']);
            }).catch(function (err) {
                console.log(err);
                _this.error = err;
            });
        }
    };
    EmailComponent.prototype.ngOnInit = function () {
    };
    EmailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-email',
            template: __webpack_require__("../../../../../src/app/email/email.component.html"),
            styles: [__webpack_require__("../../../../../src/app/email/email.component.css")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_3__router_animations__["b" /* moveIn */])(), Object(__WEBPACK_IMPORTED_MODULE_3__router_animations__["a" /* fallIn */])()],
            host: { '[@moveIn]': '' }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], EmailComponent);
    return EmailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/firebase.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseConfig; });
var FirebaseConfig = {
    firebase: {
        apiKey: 'AIzaSyAE_Un5yhEsWXuRuqLB5nvuJ8P3VmGmUF8',
        authDomain: 'ngchat-ab3a8.firebaseapp.com',
        databaseURL: 'https://ngchat-ab3a8.firebaseio.com',
        projectId: 'ngchat-ab3a8',
        storageBucket: '',
        messagingSenderId: '760180037976'
    }
};


/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#lock {\r\n    width:40%;\r\n    margin: 1.5em auto 4em auto;\r\n    display:block;\r\n}\r\n\r\n#fb {\r\n    background:#3B5998 url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 %3F%3E%3Csvg id%3D%22Layer_1%22 style%3D%22enable-background%3Anew 0 0 512 512%3B%22 version%3D%221.1%22 viewBox%3D%220 0 512 512%22 xml%3Aspace%3D%22preserve%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%3Cstyle type%3D%22text%2Fcss%22%3E%09.st0%7Bfill%3A%23fff%3B%7D%3C%2Fstyle%3E%3Cpath class%3D%22st0%22 d%3D%22M276.1%2C462V343.9h39.7l5.9-46h-45.6v-29.4c0-13.3%2C3.7-22.4%2C22.8-22.4l24.4%2C0v-41.2  c-4.2-0.6-18.7-1.8-35.5-1.8c-35.2%2C0-59.2%2C21.5-59.2%2C60.9v34h-39.8v46h39.8V462H276.1z%22 id%3D%22f%22%2F%3E%3C%2Fsvg%3E\") no-repeat 14px 6px;\r\n    background-size: 47px;\r\n    color:#fff;\r\n}\r\n\r\n#google {\r\n    border: 1px solid #95989A;\r\n    background: #fff  url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 %3F%3E%3C!DOCTYPE svg  PUBLIC '-%2F%2FW3C%2F%2FDTD SVG 1.1%2F%2FEN'  'http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd'%3E%3Csvg enable-background%3D%22new 0 0 400 400%22 height%3D%22400px%22 id%3D%22Layer_1%22 version%3D%221.1%22 viewBox%3D%220 0 400 400%22 width%3D%22400px%22 xml%3Aspace%3D%22preserve%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%3Cg%3E%3Cpath d%3D%22M142.9%2C24.2C97.6%2C39.7%2C59%2C73.6%2C37.5%2C116.5c-7.5%2C14.8-12.9%2C30.5-16.2%2C46.8c-8.2%2C40.4-2.5%2C83.5%2C16.1%2C120.3   c12.1%2C24%2C29.5%2C45.4%2C50.5%2C62.1c19.9%2C15.8%2C43%2C27.6%2C67.6%2C34.1c31%2C8.3%2C64%2C8.1%2C95.2%2C1c28.2-6.5%2C54.9-20%2C76.2-39.6   c22.5-20.7%2C38.6-47.9%2C47.1-77.2c9.3-31.9%2C10.5-66%2C4.7-98.8c-58.3%2C0-116.7%2C0-175%2C0c0%2C24.2%2C0%2C48.4%2C0%2C72.6c33.8%2C0%2C67.6%2C0%2C101.4%2C0   c-3.9%2C23.2-17.7%2C44.4-37.2%2C57.5c-12.3%2C8.3-26.4%2C13.6-41%2C16.2c-14.6%2C2.5-29.8%2C2.8-44.4-0.1c-14.9-3-29-9.2-41.4-17.9   c-19.8-13.9-34.9-34.2-42.6-57.1c-7.9-23.3-8-49.2%2C0-72.4c5.6-16.4%2C14.8-31.5%2C27-43.9c15-15.4%2C34.5-26.4%2C55.6-30.9   c18-3.8%2C37-3.1%2C54.6%2C2.2c15%2C4.5%2C28.8%2C12.8%2C40.1%2C23.6c11.4-11.4%2C22.8-22.8%2C34.2-34.2c6-6.1%2C12.3-12%2C18.1-18.3   c-17.3-16-37.7-28.9-59.9-37.1C228.2%2C10.6%2C183.2%2C10.3%2C142.9%2C24.2z%22 fill%3D%22%23FFFFFF%22%2F%3E%3Cg%3E%3Cpath d%3D%22M142.9%2C24.2c40.2-13.9%2C85.3-13.6%2C125.3%2C1.1c22.2%2C8.2%2C42.5%2C21%2C59.9%2C37.1c-5.8%2C6.3-12.1%2C12.2-18.1%2C18.3    c-11.4%2C11.4-22.8%2C22.8-34.2%2C34.2c-11.3-10.8-25.1-19-40.1-23.6c-17.6-5.3-36.6-6.1-54.6-2.2c-21%2C4.5-40.5%2C15.5-55.6%2C30.9    c-12.2%2C12.3-21.4%2C27.5-27%2C43.9c-20.3-15.8-40.6-31.5-61-47.3C59%2C73.6%2C97.6%2C39.7%2C142.9%2C24.2z%22 fill%3D%22%23EA4335%22%2F%3E%3C%2Fg%3E%3Cg%3E%3Cpath d%3D%22M21.4%2C163.2c3.3-16.2%2C8.7-32%2C16.2-46.8c20.3%2C15.8%2C40.6%2C31.5%2C61%2C47.3c-8%2C23.3-8%2C49.2%2C0%2C72.4    c-20.3%2C15.8-40.6%2C31.6-60.9%2C47.3C18.9%2C246.7%2C13.2%2C203.6%2C21.4%2C163.2z%22 fill%3D%22%23FBBC05%22%2F%3E%3C%2Fg%3E%3Cg%3E%3Cpath d%3D%22M203.7%2C165.1c58.3%2C0%2C116.7%2C0%2C175%2C0c5.8%2C32.7%2C4.5%2C66.8-4.7%2C98.8c-8.5%2C29.3-24.6%2C56.5-47.1%2C77.2    c-19.7-15.3-39.4-30.6-59.1-45.9c19.5-13.1%2C33.3-34.3%2C37.2-57.5c-33.8%2C0-67.6%2C0-101.4%2C0C203.7%2C213.5%2C203.7%2C189.3%2C203.7%2C165.1z%22 fill%3D%22%234285F4%22%2F%3E%3C%2Fg%3E%3Cg%3E%3Cpath d%3D%22M37.5%2C283.5c20.3-15.7%2C40.6-31.5%2C60.9-47.3c7.8%2C22.9%2C22.8%2C43.2%2C42.6%2C57.1c12.4%2C8.7%2C26.6%2C14.9%2C41.4%2C17.9    c14.6%2C3%2C29.7%2C2.6%2C44.4%2C0.1c14.6-2.6%2C28.7-7.9%2C41-16.2c19.7%2C15.3%2C39.4%2C30.6%2C59.1%2C45.9c-21.3%2C19.7-48%2C33.1-76.2%2C39.6    c-31.2%2C7.1-64.2%2C7.3-95.2-1c-24.6-6.5-47.7-18.2-67.6-34.1C67%2C328.9%2C49.6%2C307.5%2C37.5%2C283.5z%22 fill%3D%22%2334A853%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\") no-repeat 25px;\r\n    background-size: 25px;\r\n}\r\n\r\n#email {\r\n    background: #ECECEC  url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 %3F%3E%3Csvg height%3D%22331.46899%22 id%3D%22svg2439%22 version%3D%221.0%22 width%3D%22439.371%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Acc%3D%22http%3A%2F%2Fcreativecommons.org%2Fns%23%22 xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22 xmlns%3Ainkscape%3D%22http%3A%2F%2Fwww.inkscape.org%2Fnamespaces%2Finkscape%22 xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22 xmlns%3Asodipodi%3D%22http%3A%2F%2Fsodipodi.sourceforge.net%2FDTD%2Fsodipodi-0.dtd%22 xmlns%3Asvg%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs id%3D%22defs2441%22%3E%3Cmarker id%3D%22ArrowEnd%22 markerHeight%3D%223%22 markerUnits%3D%22strokeWidth%22 markerWidth%3D%224%22 orient%3D%22auto%22 refX%3D%220%22 refY%3D%225%22 viewBox%3D%220 0 10 10%22%3E%3Cpath d%3D%22M 0%2C0 L 10%2C5 L 0%2C10 L 0%2C0 z%22 id%3D%22path2444%22%2F%3E%3C%2Fmarker%3E%3Cmarker id%3D%22ArrowStart%22 markerHeight%3D%223%22 markerUnits%3D%22strokeWidth%22 markerWidth%3D%224%22 orient%3D%22auto%22 refX%3D%2210%22 refY%3D%225%22 viewBox%3D%220 0 10 10%22%3E%3Cpath d%3D%22M 10%2C0 L 0%2C5 L 10%2C10 L 10%2C0 z%22 id%3D%22path2447%22%2F%3E%3C%2Fmarker%3E%3C%2Fdefs%3E%3Cg id%3D%22g2449%22 transform%3D%22translate(-145.3305%2C-145.3305)%22%3E%3Cpath d%3D%22M 569.374%2C461.472 L 569.374%2C160.658 L 160.658%2C160.658 L 160.658%2C461.472 L 569.374%2C461.472 z%22 id%3D%22path2451%22 style%3D%22fill%3Anone%3Bstroke%3A%23000000%3Bstroke-width%3A30.65500069%22%2F%3E%3Cpath id%3D%22path2453%22 style%3D%22fill%3Anone%3Bstroke%3A%23000000%3Bstroke-width%3A30.65500069%22%2F%3E%3Cpath d%3D%22M 164.46%2C164.49 L 340.78%2C343.158 C 353.849%2C356.328 377.63%2C356.172 390.423%2C343.278 L 566.622%2C165.928%22 id%3D%22path2455%22 style%3D%22fill%3Anone%3Bstroke%3A%23000000%3Bstroke-width%3A30.65500069%22%2F%3E%3Cpath d%3D%22M 170.515%2C451.566 L 305.61%2C313.46%22 id%3D%22path2457%22 style%3D%22fill%3Anone%3Bstroke%3A%23000000%3Bstroke-width%3A30.65500069%22%2F%3E%3Cpath d%3D%22M 557.968%2C449.974 L 426.515%2C315.375%22 id%3D%22path2459%22 style%3D%22fill%3Anone%3Bstroke%3A%23000000%3Bstroke-width%3A30.65500069%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\") no-repeat 25px;\r\n    background-size: 25px;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n    #page {\r\n        padding:1em;\r\n    }\r\n    #toolbar {\r\n        width:90%;\r\n        margin-left: -45%;\r\n    }\r\n    #fb {\r\n        background:#3B5998;\r\n    }\r\n\r\n    #google {\r\n        background: #fff;\r\n    }\r\n\r\n    #email {\r\n        background: #ECECEC;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-container\">\n  <img src=\"../../assets/images/lock.svg\" id=\"lock\">\n\n    <span class=\"error\" *ngIf=\"error\">{{ error }}</span>\n\n  <button (click)=\"loginFb()\" id=\"fb\">Login With Facebook</button><br>\n  <button (click)=\"loginGoogle()\" id=\"google\">Login With Google</button>\n  <button routerLink=\"/login-email\" id=\"email\">Email</button>\n\n  <a routerLink=\"/signup\" routerLinkActive=\"active\" class=\"alc\">No account? <strong>Create one here</strong></a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__("../../../../firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(afAuth, router) {
        var _this = this;
        this.afAuth = afAuth;
        this.router = router;
        this.user = afAuth.authState; // only triggered on sign-in/out (for old behavior use .idToken)
        this.user.subscribe(function (auth) {
            if (auth) {
                _this.router.navigateByUrl('/members');
            }
        });
    }
    LoginComponent.prototype.loginGoogle = function () {
        var _this = this;
        this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].GoogleAuthProvider()).then(function (success) {
            _this.router.navigateByUrl('/members');
        }).catch(function (err) {
            _this.error = err;
        });
    };
    LoginComponent.prototype.loginFb = function () {
        var _this = this;
        this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].FacebookAuthProvider()).then(function (success) {
            _this.router.navigateByUrl('/members');
        }).catch(function (err) {
            _this.error = err;
        });
    };
    LoginComponent.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_4__router_animations__["b" /* moveIn */])()],
            host: { '[@moveIn]': '' }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/members/members.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#toolbar {\r\n    padding:0;\r\n    width:70%;\r\n    margin-left:-35%;\r\n}\r\n\r\nheader {\r\n    background:#3B8598;\r\n    width:100%;\r\n}\r\n\r\n.basic-btn {\r\n    width:100px;\r\n    margin:0;\r\n}\r\n\r\n#page {\r\n    padding:3em;\r\n    margin:0;\r\n}\r\n\r\n#page img {\r\n    margin-top:30px;\r\n}\r\n\r\nh2 {\r\n    margin:0;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n    #page {\r\n        padding:1em;\r\n    }\r\n    #toolbar {\r\n        width:90%;\r\n        margin-left: -45%;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/members/members.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-container\" id=\"toolbar\">\n  <header [@fallIn]=\"state\">\n    <button (click)=\"logout()\" class=\"basic-btn\">Logout</button>\n  </header>\n  <div id=\"page\" [@moveInLeft]=\"state\">\n    <h2>Hey {{ name.displayName }}!</h2>\n\n    <img src=\"assets/images/filler.png\" />\n  </div>\n  \n</div>\n"

/***/ }),

/***/ "../../../../../src/app/members/members.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MembersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MembersComponent = /** @class */ (function () {
    function MembersComponent(afAuth, router) {
        var _this = this;
        this.afAuth = afAuth;
        this.router = router;
        this.state = '';
        this.user = afAuth.authState;
        this.user.subscribe(function (auth) {
            if (auth) {
                //console.log(auth);
                _this.name = auth;
            }
        });
    }
    MembersComponent.prototype.logout = function () {
        this.afAuth.auth.signOut();
        this.router.navigateByUrl('/login');
    };
    MembersComponent.prototype.ngOnInit = function () {
    };
    MembersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-members',
            template: __webpack_require__("../../../../../src/app/members/members.component.html"),
            styles: [__webpack_require__("../../../../../src/app/members/members.component.css")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_3__router_animations__["b" /* moveIn */])(), Object(__WEBPACK_IMPORTED_MODULE_3__router_animations__["a" /* fallIn */])(), Object(__WEBPACK_IMPORTED_MODULE_3__router_animations__["c" /* moveInLeft */])()],
            host: { '[@moveIn]': '' }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], MembersComponent);
    return MembersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/router.animations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = moveIn;
/* harmony export (immutable) */ __webpack_exports__["a"] = fallIn;
/* harmony export (immutable) */ __webpack_exports__["c"] = moveInLeft;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

function moveIn() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* trigger */])('moveIn', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* state */])('void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* style */])({ position: 'fixed', width: '100%' })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* style */])({ position: 'fixed', width: '100%' })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* transition */])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* style */])({ opacity: '0', transform: 'translateX(100px)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* animate */])('.6s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* style */])({ opacity: '1', transform: 'translateX(0)' }))
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* transition */])(':leave', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* style */])({ opacity: '1', transform: 'translateX(0)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* animate */])('.3s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* style */])({ opacity: '0', transform: 'translateX(-200px)' }))
        ])
    ]);
}
function fallIn() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* trigger */])('fallIn', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* transition */])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* style */])({ opacity: '0', transform: 'translateY(40px)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* animate */])('.4s .2s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* style */])({ opacity: '1', transform: 'translateY(0)' }))
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* transition */])(':leave', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* style */])({ opacity: '1', transform: 'translateX(0)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* animate */])('.3s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* style */])({ opacity: '0', transform: 'translateX(-200px)' }))
        ])
    ]);
}
function moveInLeft() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* trigger */])('moveInLeft', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* transition */])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* style */])({ opacity: '0', transform: 'translateX(-100px)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* animate */])('.6s .2s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* style */])({ opacity: '1', transform: 'translateX(0)' }))
        ])
    ]);
}


/***/ }),

/***/ "../../../../../src/app/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-container\">\n  <a routerLink=\"/login\" id=\"goback\">Go back</a>\n\n  <h2>Join now</h2>\n\n  <span class=\"error\" *ngIf=\"error\" [@fallIn]='state'>{{ error }}</span>\n    \n  <form #formData='ngForm' (ngSubmit)=\"onSubmit(formData)\">\n\n    <input type=\"text\" placeholder=\"Email address..\" (ngModel)=\"email\" name=\"email\" class=\"txt\" required>\n    <input type=\"password\" placeholder=\"Password\" (ngModel)=\"password\" name=\"password\" class=\"txt\" required>\n\n\n    <button type=\"submit\" [disabled]=\"!formData.valid\" class=\"basic-btn\">Create my account</button>\n  </form>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = /** @class */ (function () {
    function SignupComponent(afAuth, router) {
        var _this = this;
        this.afAuth = afAuth;
        this.router = router;
        this.state = '';
        this.user = afAuth.authState; // only triggered on sign-in/out (for old behavior use .idToken)
        this.user.subscribe(function (auth) {
            if (auth) {
                _this.router.navigateByUrl('/members');
            }
        });
    }
    SignupComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        if (formData.valid) {
            console.log(formData.value);
            this.afAuth.auth.createUserWithEmailAndPassword(formData.value.email, formData.value.password).then(function (success) {
                console.log(success);
                _this.router.navigate(['/login']);
            }).catch(function (err) {
                console.log(err);
                _this.error = err;
            });
        }
    };
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-signup',
            template: __webpack_require__("../../../../../src/app/signup/signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/signup/signup.component.css")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_3__router_animations__["b" /* moveIn */])(), Object(__WEBPACK_IMPORTED_MODULE_3__router_animations__["a" /* fallIn */])()],
            host: { '[@moveIn]': '' }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map