webpackJsonp([1],{

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file includes polyfills needed by Angular and is loaded before the app.
// You can add your own extra polyfills to this file.
__webpack_require__(288);
__webpack_require__(281);
__webpack_require__(277);
__webpack_require__(283);
__webpack_require__(282);
__webpack_require__(280);
__webpack_require__(279);
__webpack_require__(287);
__webpack_require__(276);
__webpack_require__(275);
__webpack_require__(285);
__webpack_require__(278);
__webpack_require__(286);
__webpack_require__(284);
__webpack_require__(289);
__webpack_require__(437);
// If you need to support the browsers/features below, uncomment the import
// and run `npm install import-name-here';
// Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
// Needed for: IE9
// import 'classlist.js';
// Animations
// Needed for: All but Chrome and Firefox, Not supported in IE9
// import 'web-animations-js';
// Date, currency, decimal and percent pipes
// Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
// import 'intl';
// NgClass on SVG elements
// Needed for: IE10, IE11
// import 'classlist.js';
//# sourceMappingURL=polyfills.js.map

/***/ }),

/***/ 438:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 438;

/***/ }),

/***/ 439:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(1);
var http_1 = __webpack_require__(211);
var Observable_1 = __webpack_require__(23);
__webpack_require__(529);
__webpack_require__(530);
__webpack_require__(528);
var BookingService = (function () {
    function BookingService(http) {
        this.http = http;
    }
    BookingService.prototype.book = function (bookDetail) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post("/api/book", bookDetail, options)
            .map(this.extractResponse.bind(this))
            .catch(this.handleError);
    };
    BookingService.prototype.extractResponse = function (res) {
        var body = res.json();
        return body || {};
    };
    BookingService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    BookingService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
    ], BookingService);
    return BookingService;
    var _a;
}());
exports.BookingService = BookingService;
//# sourceMappingURL=booking.service.js.map

/***/ }),

/***/ 440:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.ROUTES = [
    { path: 'dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
    { path: 'user', title: 'User Profile', icon: 'person', class: '' },
    { path: 'table', title: 'Table List', icon: 'content_paste', class: '' },
    { path: 'typography', title: 'Typography', icon: 'library_books', class: '' },
    { path: 'icons', title: 'Icons', icon: 'bubble_chart', class: '' },
    { path: 'maps', title: 'Maps', icon: 'location_on', class: '' },
    { path: 'notifications', title: 'Notifications', icon: 'notifications', class: '' },
    { path: 'upgrade', title: 'Upgrade to PRO', icon: 'unarchive', class: 'active-pro' },
];
//# sourceMappingURL=sidebar-routes.config.js.map

/***/ }),

/***/ 546:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(220);
var platform_browser_dynamic_1 = __webpack_require__(668);
var core_1 = __webpack_require__(1);
var environment_1 = __webpack_require__(568);
var app_module_1 = __webpack_require__(550);
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 549:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(1);
var common_1 = __webpack_require__(43);
var dataService_1 = __webpack_require__(83);
var AppComponent = (function () {
    function AppComponent(location, dataservice) {
        var _this = this;
        this.dataservice = dataservice;
        this.location = location;
        this.dataservice.getWebData()
            .subscribe(function (result) {
            _this.websiteDataConfig = result;
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        $.getScript('../assets/js/material-dashboard.js');
        $.getScript('../assets/js/initMenu.js');
    };
    AppComponent.prototype.isMaps = function (path) {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (path == titlee) {
            return false;
        }
        else {
            return true;
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: __webpack_require__(570)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof common_1.Location !== 'undefined' && common_1.Location) === 'function' && _a) || Object, (typeof (_b = typeof dataService_1.DataService !== 'undefined' && dataService_1.DataService) === 'function' && _b) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(218)))

/***/ }),

/***/ 550:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(1);
var platform_browser_1 = __webpack_require__(215);
var router_1 = __webpack_require__(137);
var http_1 = __webpack_require__(211);
var forms_1 = __webpack_require__(498);
var app_component_1 = __webpack_require__(549);
var dashboard_component_1 = __webpack_require__(551);
var dashboard_module_1 = __webpack_require__(552);
var sidebar_module_1 = __webpack_require__(567);
var footer_module_1 = __webpack_require__(563);
var navbar_module_1 = __webpack_require__(565);
var dataService_1 = __webpack_require__(83);
var booking_service_1 = __webpack_require__(439);
var common_1 = __webpack_require__(43);
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                dashboard_module_1.DashboardModule,
                sidebar_module_1.SidebarModule,
                navbar_module_1.NavbarModule,
                footer_module_1.FooterModule,
                router_1.RouterModule.forRoot([]),
                http_1.HttpModule,
                forms_1.FormsModule
            ],
            declarations: [app_component_1.AppComponent, dashboard_component_1.DashboardComponent],
            providers: [{ provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }, dataService_1.DataService, booking_service_1.BookingService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 551:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(1);
var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DashboardComponent.prototype, "websiteDataConfig", void 0);
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'dashboard-cmp',
            template: __webpack_require__(571)
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 552:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(1);
var common_1 = __webpack_require__(43);
var router_1 = __webpack_require__(137);
var forms_1 = __webpack_require__(498);
var dashboard_routes_1 = __webpack_require__(553);
__webpack_require__(699);
var DashboardModule = (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule,
                router_1.RouterModule.forChild(dashboard_routes_1.MODULE_ROUTES),
                forms_1.FormsModule
            ],
            declarations: [dashboard_routes_1.MODULE_COMPONENTS]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardModule);
    return DashboardModule;
}());
exports.DashboardModule = DashboardModule;
//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ 553:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var home_component_1 = __webpack_require__(554);
var user_component_1 = __webpack_require__(561);
var icons_component_1 = __webpack_require__(555);
var table_component_1 = __webpack_require__(558);
var notifications_component_1 = __webpack_require__(557);
var typography_component_1 = __webpack_require__(559);
var maps_component_1 = __webpack_require__(556);
var upgrade_component_1 = __webpack_require__(560);
exports.MODULE_ROUTES = [
    { path: 'Home', component: home_component_1.HomeComponent },
    { path: 'AboutOurCafe', component: user_component_1.UserComponent },
    { path: 'OurGallery', component: table_component_1.TableComponent },
    { path: 'OurMenu', component: icons_component_1.IconsComponent },
    { path: 'LatestNewsandEvents', component: notifications_component_1.NotificationsComponent },
    { path: 'BookaTable', component: typography_component_1.TypographyComponent },
    { path: 'ContactUs', component: maps_component_1.MapsComponent },
    { path: '', redirectTo: 'Home', pathMatch: 'full' }
];
exports.MODULE_COMPONENTS = [
    home_component_1.HomeComponent,
    user_component_1.UserComponent,
    table_component_1.TableComponent,
    icons_component_1.IconsComponent,
    notifications_component_1.NotificationsComponent,
    typography_component_1.TypographyComponent,
    maps_component_1.MapsComponent,
    upgrade_component_1.UpgradeComponent
];
//# sourceMappingURL=dashboard.routes.js.map

/***/ }),

/***/ 554:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(1);
var dataService_1 = __webpack_require__(83);
var HomeComponent = (function () {
    function HomeComponent(dataservice) {
        this.dataservice = dataservice;
        this.items = [{
                head: "Cycling Event",
                subject: "Cycling event on 15th August."
            },
            {
                head: "MotorBiking Event",
                subject: "MotorBiking event on 15th August"
            }
        ];
        this.cafeServices = ["We are a bunch of bicycle lovers who would like to share our experience with other companions. We have a pretty decent collection of armours for people like us.",
            "Alongside we also take care of your taste buds with some delicious cuisines from all around the world. To cater the health freaks we have some really awesome juice and shake bar, to try all possible variants of the world",
            "U can also share the creative insight of your team with us, in our really cool Amphitheater."
        ];
        this.events = [
            {
                title: "Cafe FreeBird Launching  Cycling Event - 15 August 2017 (07:00 AM - 10:00 AM)",
                description: "Cycling event for all the cyclist around NCR to witness  CAFE FREE BIRD (An awesome place for eat, drink and sports for every age group, family and friends) ",
                date: "15/08/2017"
            },
            {
                title: "Cafe FreeBird Launching  MotorBiking Event - 15 August 2017 (07:00 AM - 10:00 AM)",
                description: "Cycling event for all the bikers around NCR to witness  CAFE FREE BIRD (An awesome place for eat, drink and sports for every age group, family and friends) ",
                date: "15/08/2017"
            }
        ];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataservice.getWebData()
            .subscribe(function (result) {
            _this.websiteDataConfig = result;
        });
        // $('[data-toggle="checkbox"]').each(function () {
        //     if($(this).data('toggle') == 'switch') return;
        //
        //     var $checkbox = $(this);
        //     $checkbox.checkbox();
        // });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home-cmp',
            template: __webpack_require__(572)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof dataService_1.DataService !== 'undefined' && dataService_1.DataService) === 'function' && _a) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 555:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(1);
var IconsComponent = (function () {
    function IconsComponent() {
        this.counter = 0;
        this.menuItems = ["../../../assets/img/menu1.png", "../../../assets/img/menu2.png", "../../../assets/img/menu3.png", "../../../assets/img/menu4.png", "../../../assets/img/menu6.png", "../../../assets/img/menu5.png"];
    }
    IconsComponent.prototype.ngOnInit = function () {
        this.changeBackgroundImages(this.counter);
    };
    IconsComponent.prototype.handleLeftClick = function () {
        if (this.counter <= 0)
            return;
        this.changeBackgroundImages(--this.counter);
    };
    IconsComponent.prototype.handleRightClick = function () {
        if (this.counter >= this.menuItems.length - 1)
            return;
        this.changeBackgroundImages(++this.counter);
    };
    IconsComponent.prototype.changeBackgroundImages = function (imgId) {
        this.divRef = document.getElementById("menuImg");
        this.divRef.style.backgroundImage = "url(" + this.menuItems[imgId] + ")";
    };
    IconsComponent = __decorate([
        core_1.Component({
            selector: 'icons-cmp',
            template: __webpack_require__(573)
        }), 
        __metadata('design:paramtypes', [])
    ], IconsComponent);
    return IconsComponent;
}());
exports.IconsComponent = IconsComponent;
//# sourceMappingURL=icons.component.js.map

/***/ }),

/***/ 556:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(1);
var dataService_1 = __webpack_require__(83);
var MapsComponent = (function () {
    function MapsComponent(dataservice) {
        this.dataservice = dataservice;
        this.cafe = [
            {
                head: "Address:",
                subject: "Gurgoan-Faridabad Road"
            },
            {
                head: "Contact No:",
                subject: "9871900222"
            }, {
                head: "Email Id:",
                subject: "cafefreebird@gmail.com"
            }
        ];
        this.feedback = [
            {
                head: "Email Id:",
                subject: "wisdomshacks@gmail.com"
            },
            {
                head: "Contact No:",
                subject: "9999857122"
            }
        ];
    }
    MapsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataservice.getWebData()
            .subscribe(function (result) {
            _this.websiteDataConfig = result;
        });
        var myLatlng = new google.maps.LatLng(28.425611802628023, 77.14615395337314);
        var mapOptions = {
            zoom: 18,
            center: myLatlng,
            scrollwheel: false,
            styles: [{ "featureType": "water", "stylers": [{ "saturation": 43 }, { "lightness": -11 }, { "hue": "#0088ff" }] }, { "featureType": "road", "elementType": "geometry.fill", "stylers": [{ "hue": "#ff0000" }, { "saturation": -100 }, { "lightness": 99 }] }, { "featureType": "road", "elementType": "geometry.stroke", "stylers": [{ "color": "#808080" }, { "lightness": 54 }] }, { "featureType": "landscape.man_made", "elementType": "geometry.fill", "stylers": [{ "color": "#ece2d9" }] }, { "featureType": "poi.park", "elementType": "geometry.fill", "stylers": [{ "color": "#ccdca1" }] }, { "featureType": "road", "elementType": "labels.text.fill", "stylers": [{ "color": "#767676" }] }, { "featureType": "road", "elementType": "labels.text.stroke", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "poi", "stylers": [{ "visibility": "off" }] }, { "featureType": "landscape.natural", "elementType": "geometry.fill", "stylers": [{ "visibility": "on" }, { "color": "#b8cb93" }] }, { "featureType": "poi.park", "stylers": [{ "visibility": "on" }] }, { "featureType": "poi.sports_complex", "stylers": [{ "visibility": "on" }] }, { "featureType": "poi.medical", "stylers": [{ "visibility": "on" }] }, { "featureType": "poi.business", "stylers": [{ "visibility": "simplified" }] }]
        };
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        var marker = new google.maps.Marker({
            position: myLatlng,
            title: "Cafe FreeBird"
        });
        // To add the marker to the map, call setMap();
        marker.setMap(map);
    };
    MapsComponent = __decorate([
        core_1.Component({
            selector: 'maps-cmp',
            template: __webpack_require__(574)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof dataService_1.DataService !== 'undefined' && dataService_1.DataService) === 'function' && _a) || Object])
    ], MapsComponent);
    return MapsComponent;
    var _a;
}());
exports.MapsComponent = MapsComponent;
//# sourceMappingURL=maps.component.js.map

/***/ }),

/***/ 557:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(1);
var NotificationsComponent = (function () {
    function NotificationsComponent() {
        this.CafImgs = ['../../../assets/img/event3.jpg', '../../../assets/img/event4.jpg', '../../../assets/img/event5.jpg', '../../../assets/img/event6.jpg', '../../../assets/img/event7.jpg', '../../../assets/img/event8.jpg', '../../../assets/img/event9.jpg'];
    }
    NotificationsComponent = __decorate([
        core_1.Component({
            selector: 'notifications-cmp',
            template: __webpack_require__(575)
        }), 
        __metadata('design:paramtypes', [])
    ], NotificationsComponent);
    return NotificationsComponent;
}());
exports.NotificationsComponent = NotificationsComponent;
//# sourceMappingURL=notifications.component.js.map

/***/ }),

/***/ 558:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(1);
var dataService_1 = __webpack_require__(83);
var TableComponent = (function () {
    function TableComponent(dataservice) {
        this.dataservice = dataservice;
        this.CafImgs = [
            ['../../../assets/img/event1.jpg', '../../../assets/img/event3.jpg'],
            ['../../../assets/img/event4.jpg', '../../../assets/img/event5.jpg'],
            ['../../../assets/img/event6.jpg', '../../../assets/img/event7.jpg'],
            ['../../../assets/img/event8.jpg', '../../../assets/img/event9.jpg']
        ];
        this.prodImgs = [
            ['../../assets/img/product1.jpg', '../../../assets/img/product2.jpg', '../../../assets/img/product3.jpg'],
            ['../../assets/img/product4.jpg', '../../../assets/img/product5.jpg', '../../../assets/img/product6.jpg'],
        ];
    }
    TableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataservice.getWebData()
            .subscribe(function (result) {
            _this.websiteDataConfig = result;
        });
    };
    TableComponent = __decorate([
        core_1.Component({
            selector: 'table-cmp',
            template: __webpack_require__(576)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof dataService_1.DataService !== 'undefined' && dataService_1.DataService) === 'function' && _a) || Object])
    ], TableComponent);
    return TableComponent;
    var _a;
}());
exports.TableComponent = TableComponent;
//# sourceMappingURL=table.component.js.map

/***/ }),

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(1);
var dataService_1 = __webpack_require__(83);
var booking_service_1 = __webpack_require__(439);
var TypographyComponent = (function () {
    function TypographyComponent(dataservice, bookingService) {
        this.dataservice = dataservice;
        this.bookingService = bookingService;
        this.bookingOptions = [
            { path: "../../../assets/img/terrace.jpg", caption: "Terrace Cafe" },
            { path: "../../../assets/img/funkyYard.jpg", caption: "FunkyYard" },
            { path: "../../../assets/img/relaxArea.jpg", caption: "Relaxing Area" },
            { path: "../../../assets/img/amphitheater.jpg", caption: "Amphi-Theater" }
        ];
        this.bookingDetail = {
            "name": "",
            "email": "",
            "guest": "",
            "mob": "",
            "area": ""
        };
    }
    TypographyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ParsleyForm = $('.parsleyjs').parsley();
        this.dataservice.getWebData()
            .subscribe(function (result) {
            _this.websiteDataConfig = result;
        });
    };
    TypographyComponent.prototype.bookTable = function () {
        if (this.ParsleyForm.isValid()) {
            this.bookingService.book(this.bookingDetail)
                .subscribe(function (result) {
                if (result.message == "done") {
                    document.getElementById("successmsg").style.display = "block";
                    setTimeout(function () {
                        document.getElementById("successmsg").style.display = "none";
                    }, 10000);
                }
                else {
                    document.getElementById("errormsg").style.display = "block";
                    setTimeout(function () {
                        document.getElementById("errormsg").style.display = "none";
                    }, 10000);
                }
            });
        }
    };
    TypographyComponent = __decorate([
        core_1.Component({
            selector: 'typography-cmp',
            template: __webpack_require__(577)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof dataService_1.DataService !== 'undefined' && dataService_1.DataService) === 'function' && _a) || Object, (typeof (_b = typeof booking_service_1.BookingService !== 'undefined' && booking_service_1.BookingService) === 'function' && _b) || Object])
    ], TypographyComponent);
    return TypographyComponent;
    var _a, _b;
}());
exports.TypographyComponent = TypographyComponent;
//# sourceMappingURL=typography.component.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(218)))

/***/ }),

/***/ 560:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(1);
var UpgradeComponent = (function () {
    function UpgradeComponent() {
    }
    UpgradeComponent = __decorate([
        core_1.Component({
            selector: 'upgrade-cmp',
            template: __webpack_require__(578)
        }), 
        __metadata('design:paramtypes', [])
    ], UpgradeComponent);
    return UpgradeComponent;
}());
exports.UpgradeComponent = UpgradeComponent;
//# sourceMappingURL=upgrade.component.js.map

/***/ }),

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(1);
var dataService_1 = __webpack_require__(83);
var UserComponent = (function () {
    function UserComponent(dataservice) {
        this.dataservice = dataservice;
        this.team = {
            partner1: {
                desig: "Freebird's Pilot(Software Engineer)",
                name: "Himanshu",
                description: "Works with an MNC as a software engineer. Co-owner and visionary of FreeBird Cafe. Cycling enthusiast and member of Audacity Riders Faridabad"
            },
            partner2: {
                desig: "Freebird's Pilot(Chartered Accountant)",
                name: "Ankit",
                description: "Works with an MNC as a chartered accountant. Co-owner and visionary of FreeBird Cafe. Cycling enthusiast and member of Audacity Riders Faridabad"
            },
            description: "\"AUDACITY\" means courage. The courage to overcome the constraints of life which is weak mindset and unhealthy lifestyle.\n    So together we aim to join hands to improve our health and mindset for better life. \n    We aim to promote cycling and recycling habits in the city.\n    We aim to make brothers for life.\nWe aim to become more awesome than general population.\n    We aim to enjoy the pedal fun at its best.We aim to sweat, sweat and sweat to improve our fitness.\n    THE BEST HABITS ON THE EARTH ARE CYCLING AND RECYCLING.\n    Get yourself, your friends and your family members into cycling.\n    Join the most COOLEST & GROOVIEST GANG of Faridabad\n    Be Good.Be Fit. Play Fun"
        };
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataservice.getWebData()
            .subscribe(function (result) {
            _this.websiteDataConfig = result;
        });
        // $.getScript('../../../assets/js/material-dashboard.js');
    };
    UserComponent = __decorate([
        core_1.Component({
            selector: 'abtUs-cmp',
            template: __webpack_require__(579)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof dataService_1.DataService !== 'undefined' && dataService_1.DataService) === 'function' && _a) || Object])
    ], UserComponent);
    return UserComponent;
    var _a;
}());
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ 562:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(1);
var FooterComponent = (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent = __decorate([
        core_1.Component({
            selector: 'footer-cmp',
            template: __webpack_require__(580)
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;
//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 563:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(1);
var common_1 = __webpack_require__(43);
var router_1 = __webpack_require__(137);
var footer_component_1 = __webpack_require__(562);
var FooterModule = (function () {
    function FooterModule() {
    }
    FooterModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule, common_1.CommonModule],
            declarations: [footer_component_1.FooterComponent],
            exports: [footer_component_1.FooterComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterModule);
    return FooterModule;
}());
exports.FooterModule = FooterModule;
//# sourceMappingURL=footer.module.js.map

/***/ }),

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(1);
var sidebar_routes_config_1 = __webpack_require__(440);
var common_1 = __webpack_require__(43);
var NavbarComponent = (function () {
    function NavbarComponent(location) {
        this.location = location;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.listTitles = sidebar_routes_config_1.ROUTES.filter(function (listTitle) { return listTitle; });
    };
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(2);
        }
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Cafe FreeBird';
    };
    NavbarComponent = __decorate([
        core_1.Component({
            selector: 'navbar-cmp',
            template: __webpack_require__(581)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof common_1.Location !== 'undefined' && common_1.Location) === 'function' && _a) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a;
}());
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 565:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(1);
var common_1 = __webpack_require__(43);
var router_1 = __webpack_require__(137);
var navbar_component_1 = __webpack_require__(564);
var NavbarModule = (function () {
    function NavbarModule() {
    }
    NavbarModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule, common_1.CommonModule],
            declarations: [navbar_component_1.NavbarComponent],
            exports: [navbar_component_1.NavbarComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], NavbarModule);
    return NavbarModule;
}());
exports.NavbarModule = NavbarModule;
//# sourceMappingURL=navbar.module.js.map

/***/ }),

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(1);
var sidebar_routes_config_1 = __webpack_require__(440);
var SidebarComponent = (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
        $.getScript('../../assets/js/sidebar-moving-tab.js');
        this.menuItems = sidebar_routes_config_1.ROUTES.filter(function (menuItem) { return menuItem; });
    };
    SidebarComponent = __decorate([
        core_1.Component({
            selector: 'sidebar-cmp',
            template: __webpack_require__(582),
        }), 
        __metadata('design:paramtypes', [])
    ], SidebarComponent);
    return SidebarComponent;
}());
exports.SidebarComponent = SidebarComponent;
//# sourceMappingURL=sidebar.component.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(218)))

/***/ }),

/***/ 567:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(1);
var common_1 = __webpack_require__(43);
var router_1 = __webpack_require__(137);
var sidebar_component_1 = __webpack_require__(566);
var SidebarModule = (function () {
    function SidebarModule() {
    }
    SidebarModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule, common_1.CommonModule],
            declarations: [sidebar_component_1.SidebarComponent],
            exports: [sidebar_component_1.SidebarComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], SidebarModule);
    return SidebarModule;
}());
exports.SidebarModule = SidebarModule;
//# sourceMappingURL=sidebar.module.js.map

/***/ }),

/***/ 568:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

exports.environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 570:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <navbar-cmp></navbar-cmp>\n    <div class=\"main-panel\">         \n        <dashboard-cmp [websiteDataConfig]=\"websiteDataConfig\"></dashboard-cmp>\n        <!-- <div *ngIf=\"isMaps('/maps')\">\n            <footer-cmp></footer-cmp>\n        </div> -->\n    </div>\n</div>\n"

/***/ }),

/***/ 571:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ 572:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-10 col-lg-offset-1\">\r\n                <div id=\"carousel-example-generic\" class=\"carousel slide carouselHeight\" data-ride=\"carousel\">\r\n                    <!-- Indicators -->\r\n                    <!-- <ol class=\"carousel-indicators\">\r\n                        <li data-target=\"#carousel-example-generic\" data-slide-to=\"0\" class=\"active\"></li>\r\n                        <li data-target=\"#carousel-example-generic\" data-slide-to=\"1\"></li>\r\n                        <li data-target=\"#carousel-example-generic\" data-slide-to=\"2\"></li>\r\n                        <li data-target=\"#carousel-example-generic\" data-slide-to=\"3\"></li>\r\n                        <li data-target=\"#carousel-example-generic\" data-slide-to=\"4\"></li>\r\n                    </ol> -->\r\n\r\n                    <!-- Wrapper for slides -->\r\n                    <div class=\"carousel-inner\">\r\n                        <div class=\"item carouselItem active\">\r\n                            <img src=\"../../../assets/img/cyclecafe.jpg\" alt=\"...\">\r\n                            <div class=\"carousel-caption\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"item carouselItem\">\r\n                            <img src=\"../../../assets/img/cyclecafe2.jpg\" alt=\"...\">\r\n                            <div class=\"carousel-caption\">\r\n                                \r\n                            </div>\r\n                        </div>\r\n                        <div class=\"item carouselItem\">\r\n                            <img src=\"../../../assets/img/cyclecafe3.jpg\" alt=\"...\">\r\n                            <div class=\"carousel-caption\">\r\n                                \r\n                            </div>\r\n                        </div>\r\n                        <div class=\"item carouselItem\">\r\n                            <img src=\"../../../assets/img/cyclecafe4.jpg\" alt=\"...\">\r\n                            <div class=\"carousel-caption\">\r\n                                \r\n                            </div>\r\n                        </div>\r\n                        <div class=\"item carouselItem\">\r\n                            <img src=\"../../../assets/img/amphitheater.jpg\" alt=\"...\">\r\n                            <div class=\"carousel-caption\">\r\n                                \r\n                            </div>\r\n                        </div>\r\n                        <div class=\"item carouselItem\">\r\n                            <img src=\"../../../assets/img/caferes.jpg\" alt=\"...\">\r\n                            <div class=\"carousel-caption\">\r\n                                \r\n                            </div>\r\n                        </div>\r\n                        <div class=\"item carouselItem\">\r\n                            <img src=\"../../../assets/img/cycleEvent.jpg\" alt=\"...\">\r\n                            <div class=\"carousel-caption\">\r\n                                \r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <!-- Controls -->\r\n                    <a class=\"left carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"prev\">\r\n                    </a>\r\n                    <a class=\"right carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"next\">\r\n                    </a>\r\n                </div>\r\n                <!-- Carousel -->\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-4 col-md-8\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\" data-background-color=\"red\">\r\n                        <h3 class=\"title\">Today's Special</h3>\r\n                    </div>\r\n                    <div class=\"card-content\">\r\n                        <table class=\"table\">\r\n                            <tbody>\r\n                                <tr *ngFor=\"let item of items\">\r\n                                    <td>\r\n                                        <label>{{item.head}}:</label>\r\n                                    </td>\r\n                                    <td>\r\n                                        <p>{{item.subject}}</p>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-lg-8 col-md-16\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\" data-background-color=\"red\">\r\n                        <h3 class=\"title\">Our Services</h3>\r\n                    </div>\r\n                    <div class=\"card-content\">\r\n                        <ul>\r\n                            <li *ngFor=\"let serv of cafeServices\">{{serv}}</li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12 col-md-24\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\" data-background-color=\"red\">\r\n                        <h3 class=\"title\">Latest Events</h3>\r\n                    </div>\r\n                    <div class=\"card-content reviews\">\r\n                        <blockquote *ngFor=\"let event of events\">\r\n                            <a [routerLink]=\"['/LatestNewsandEvents']\">{{event.title}}\r\n                            </a>                           \r\n                            <small>\r\n                                {{ event.description}}\r\n                            </small>\r\n                            <small class=\"text-right\">\r\n                                {{ event.date}}\r\n                            </small>\r\n                        </blockquote>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n        <!-- <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header card-chart\" data-background-color=\"green\">\r\n                        <div class=\"ct-chart\" id=\"dailySalesChart\"></div>\r\n                    </div>\r\n                    <div class=\"card-content\">\r\n                        <h4 class=\"title\">Daily Sales</h4>\r\n                        <p class=\"category\"><span class=\"text-success\"><i class=\"fa fa-long-arrow-up\"></i> 55%  </span> increase in today sales.</p>\r\n                    </div>\r\n                    <div class=\"card-footer\">\r\n                        <div class=\"stats\">\r\n                            <i class=\"material-icons\">access_time</i> updated 4 minutes ago\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-4\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header card-chart\" data-background-color=\"orange\">\r\n                        <div class=\"ct-chart\" id=\"emailsSubscriptionChart\"></div>\r\n                    </div>\r\n                    <div class=\"card-content\">\r\n                        <h4 class=\"title\">Email Subscriptions</h4>\r\n                        <p class=\"category\">Last Campaign Performance</p>\r\n                    </div>\r\n                    <div class=\"card-footer\">\r\n                        <div class=\"stats\">\r\n                            <i class=\"material-icons\">access_time</i> campaign sent 2 days ago\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-4\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header card-chart\" data-background-color=\"red\">\r\n                        <div class=\"ct-chart\" id=\"completedTasksChart\"></div>\r\n                    </div>\r\n                    <div class=\"card-content\">\r\n                        <h4 class=\"title\">Completed Tasks</h4>\r\n                        <p class=\"category\">Last Campaign Performance</p>\r\n                    </div>\r\n                    <div class=\"card-footer\">\r\n                        <div class=\"stats\">\r\n                            <i class=\"material-icons\">access_time</i> campaign sent 2 days ago\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div> -->\r\n    </div>\r\n</div>"

/***/ }),

/***/ 573:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\" id=\"menuImg\">\n                <button class=\"menubtn\" type=\"button\" [disabled]=\"(counter <= 0)\" (click)=\"handleLeftClick()\"><i class=\"material-icons leftarrow\">keyboard_arrow_left</i></button> \n                <button class=\"pull-right menubtn\" type=\"button\" [disabled]=\"(counter >= (menuItems.length-1))\" (click)=\"handleRightClick()\"><i class=\"material-icons rightarrow\">keyboard_arrow_right</i></button>                \n            </div>\n        </div>\n    </div>\n</div>\n    "

/***/ }),

/***/ 574:
/***/ (function(module, exports) {

module.exports = "<div id=\"map\"></div>\n<div id=\"contact details\">\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <div class=\"card\">\n                <div class=\"card-header\" data-background-color=\"green\">\n                    <h4 class=\"title\">Cafe FreeBird</h4>\n                </div>\n                 <div class=\"card-content\">\n                    <div class=\"tab-content\">\n                            <div class=\"tab-pane active\" id=\"profile\">\n                                <table class=\"table\">\n                                    <tbody>\n                                        <tr *ngFor=\"let item of cafe\">\n                                            <td>\n                                                <label>{{item.head}} :</label>\n                                            </td>\n                                            <td>\n                                                <p>{{item.subject}}</p>\n                                            </td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n                </div>\n             </div>\n        </div>\n\n        <div class=\"col-md-6\">\n            <div class=\"card\">\n                <div class=\"card-header\" data-background-color=\"orange\">\n                    <h4 class=\"title\">Feedback and Suggestions</h4>\n                </div>\n                <div class=\"card-content\">\n                    <div class=\"tab-content\">\n                            <div class=\"tab-pane active\" id=\"profile\">\n                                <table class=\"table\">\n                                    <tbody>\n                                        <tr *ngFor=\"let item of feedback\">\n                                            <td>\n                                                <label>{{item.head}} :</label>\n                                            </td>\n                                            <td>\n                                                <p>{{item.subject}}</p>\n                                            </td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 575:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <!-- <div class=\"card\">\n            <div class=\"card-header\" data-background-color=\"red\">\n                <h4 class=\"title\">Notifications</h4>\n                <p class=\"category\">Handcrafted by our friend <a target=\"_blank\" href=\"https://github.com/mouse0270\">Robert McIntosh</a>. Please checkout the <a href=\"http://bootstrap-notify.remabledesigns.com/\" target=\"_blank\">full documentation.</a></p>\n            </div>\n            <div class=\"card-content\">\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <h5>Notifications Style</h5>\n                        <div class=\"alert alert-info\">\n                            <span>This is a plain notification</span>\n                        </div>\n                        <div class=\"alert alert-info\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span>This is a notification with close button.</span>\n                        </div>\n                        <div class=\"alert alert-info alert-with-icon\" data-notify=\"container\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <i data-notify=\"icon\" class=\"material-icons\">add_alert</i>\n                            <span data-notify=\"message\">This is a notification with close button and icon.</span>\n                        </div>\n                        <div class=\"alert alert-info alert-with-icon\" data-notify=\"container\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <i data-notify=\"icon\" class=\"material-icons\">add_alert</i>\n                            <span data-notify=\"message\">This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.</span>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <h5>Notification states</h5>\n                        <div class=\"alert alert-info\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span><b> Info - </b> This is a regular notification made with \".alert-info\"</span>\n                        </div>\n                        <div class=\"alert alert-success\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span><b> Success - </b> This is a regular notification made with \".alert-success\"</span>\n                        </div>\n                        <div class=\"alert alert-warning\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span><b> Warning - </b> This is a regular notification made with \".alert-warning\"</span>\n                        </div>\n                        <div class=\"alert alert-danger\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span><b> Danger - </b> This is a regular notification made with \".alert-danger\"</span>\n                        </div>\n                        <div class=\"alert alert-primary\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span><b> Primary - </b> This is a regular notification made with \".alert-primary\"</span>\n                        </div>\n                    </div>\n                </div>\n\n                <br>\n                <br>\n\n                <div class=\"places-buttons\">\n                    <div class=\"row\">\n                        <div class=\"col-md-6 col-md-offset-3 text-center\">\n                            <h5>Notifications Places\n                                <p class=\"category\">Click to view notifications</p>\n                            </h5>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-8 col-md-offset-2\">\n                            <div class=\"col-md-4\">\n                                <button class=\"btn btn-danger btn-block\" onclick=\"demo.showNotification('top','left')\">Top Left</button>\n                            </div>\n                            <div class=\"col-md-4\">\n                                <button class=\"btn btn-danger btn-block\" onclick=\"demo.showNotification('top','center')\">Top Center</button>\n                            </div>\n                            <div class=\"col-md-4\">\n                                <button class=\"btn btn-danger btn-block\" onclick=\"demo.showNotification('top','right')\">Top Right</button>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-8 col-md-offset-2\">\n                            <div class=\"col-md-4\">\n                                <button class=\"btn btn-danger btn-block\" onclick=\"demo.showNotification('bottom','left')\">Bottom Left</button>\n                            </div>\n                            <div class=\"col-md-4\">\n                                <button class=\"btn btn-danger btn-block\" onclick=\"demo.showNotification('bottom','center')\">Bottom Center</button>\n                            </div>\n                            <div class=\"col-md-4\">\n                                <button class=\"btn btn-danger btn-block\" onclick=\"demo.showNotification('bottom','right')\">Bottom Right</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div> -->\n        <div class=\"row\">\n            <div class=\"col-md-11 col-md-offset-1\">\n                <div class=\"card\">\n                    <div class=\"card-header\" data-background-color=\"red\">\n                        <h3 class=\"title\">Glimpse of Cafe FreeBird Launching Event</h3>\n                    </div>\n                    <div class=\"card-content\">\n                        <div id=\"carousel-example-generic\" class=\"carousel slide carouselHeight\" data-ride=\"carousel\">\n                            <!-- Wrapper for slides -->\n                            <div class=\"carousel-inner\">\n                                <div class=\"item carouselItem active\">\n                                    <img src=\"../../../assets/img/event1.jpg\" alt=\"...\">\n                                    <div class=\"carousel-caption\">\n                                    </div>\n                                </div>\n                                <div *ngFor=\"let imgpath of CafImgs\" class=\"item carouselItem\">\n                                    <img src=\"{{imgpath}}\" alt=\"...\">\n                                    <div class=\"carousel-caption\"></div>\n                                </div>\n\n                                <!-- Controls -->\n                                <a class=\"left carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"prev\">\n                                    </a>\n                                <a class=\"right carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"next\">\n                                    </a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 576:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card card-plain\">\n                    <div class=\"card-header\" data-background-color=\"red\">\n                        <h4 class=\"title\">Glimpse of our Cafe and Team</h4>\n                    </div>\n                    <div class=\"card-content table-responsive\">\n                        <table class=\"table\">\n                            <tbody>\n                                <tr *ngFor=\"let rowImg of CafImgs\">\n                                    <td *ngFor=\"let colImgPath of rowImg\"><img class=\"img-rounded\" src={{colImgPath}}/></td>\n                                </tr>                                                              \n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card card-plain\">\n                    <div class=\"card-header\" data-background-color=\"red\">\n                        <h4 class=\"title\">Products Offered</h4>\n                    </div>\n                    <div class=\"card-content table-responsive\">\n                        <table class=\"table\">\n                            <tbody>\n                                <tr *ngFor=\"let rowImg of prodImgs\">\n                                    <td *ngFor=\"let colImgPath of rowImg\"><img class=\"img-rounded\" src={{colImgPath}}/></td>\n                                </tr>                                                              \n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div> -->\n    </div>\n</div>\n"

/***/ }),

/***/ 577:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-8\">\r\n                    <div class=\"card\">\r\n                        <div class=\"card-header\" data-background-color=\"red\">\r\n                            <h2 class=\"title\">Book a Table</h2>\r\n                        </div>\r\n                        <div class=\"card-content\">\r\n\r\n                            <form id=\"demo-form\" method=\"post\" class=\"parsleyjs\" (ngSubmit)=\"bookTable()\" data-parsley-validate=\"\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group form-black label-floating is-empty\">\r\n                                            <label class=\"control-label\">Guest Name</label>\r\n                                            <input type=\"text\" class=\"form-control\" name=\"gname\" [(ngModel)]=\"bookingDetail.name\" required=\"required\">\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group form-black label-floating is-empty\">\r\n                                            <label class=\"control-label\">Email Id</label>\r\n                                            <input type=\"text\" class=\"form-control\" name=\"gemail\" [(ngModel)]=\"bookingDetail.email\" data-parsley-trigger=\"change\" data-parsley-validation-threshold=\"1\"\r\n                                                required=\"required\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group form-black label-floating is-empty\">\r\n                                            <label class=\"control-label\">Number of Guest</label>\r\n                                            <input type=\"text\" class=\"form-control\" name=\"gnumber\" [(ngModel)]=\"bookingDetail.guest\" required=\"required\">\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group form-black label-floating is-empty\">\r\n                                            <label class=\"control-label\">Mobile Number</label>\r\n                                            <input type=\"text\" class=\"form-control\" name=\"gmob\" [(ngModel)]=\"bookingDetail.mob\" required=\"required\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <label>Cafe Area</label>\r\n                                        <div class=\"form-group form-black label-floating is-empty\">\r\n                                            <select class=\"form-control\" name=\"garea\" [(ngModel)]=\"bookingDetail.area\" required=\"\">\r\n                                                <option value=\"Terrace\">Terrace</option>\r\n                                                <option value=\"Relaxing Area\">Relaxing Area</option>\r\n                                                <option value=\"FunkYard\">FunkYard</option>\r\n                                                <option value=\"Amphi-Theater\">Amphi-Theater</option>\r\n                                            </select>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-12\" id=\"successmsg\" style=\"display:none\">\r\n                                        <span class=\"alert alert-success\">\r\n                                            <strong>Success!</strong> Hurray!! Your Booking has been confirmed. A followup mail has been sent to above email Id.\r\n                                        </span>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\" id=\"errormsg\" style=\"display:none\">\r\n                                        <span class=\"alert alert-danger\">\r\n                                            <strong>Error!</strong> sorry!! Your Booking cannot be processed please contact us to book a table.\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n                                <button type=\"submit\" class=\"btn btn-danger pull-right\">Book the Table</button>\r\n                                <div class=\"clearfix\"></div>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"card card-plain\">\r\n                        <div class=\"card-header\" data-background-color=\"red\">\r\n                            <h4 class=\"title\">Glimpse of our Cafe</h4>\r\n                        </div>\r\n                        <div class=\"card-content table-responsive\">\r\n                            <table class=\"table\">\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let rowImg of bookingOptions\">\r\n                                        <td><img class=\"img-rounded\" src={{rowImg.path}}/>\r\n                                            <div class=\"caption\">\r\n                                                <h6 class=\"text-center imgCapt\">{{rowImg.caption}}</h6>\r\n                                            </div>\r\n                                        </td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 578:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-8 col-md-offset-2\">\n                <div class=\"card\">\n                    <div class=\"card-header text-center\" data-background-color=\"red\">\n                        <h4 class=\"title\">Material Dashboard PRO</h4>\n                        <p class=\"category\">Are you looking for more components? Please check our Premium Version of Material Dashboard.</p>\n                    </div>\n                    <div class=\"card-content\">\n                        <div class=\"table-responsive table-upgrade\">\n                            <table class=\"table\">\n                                <thead>\n                                    <tr>\n                                        <th></th>\n                                        <th class=\"text-center\">Free</th>\n                                        <th class=\"text-center\">PRO</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr>\n                                        <td>Components</td>\n                                        <td class=\"text-center\">60</td>\n                                        <td class=\"text-center\">200</td>\n                                    </tr>\n                                    <tr>\n                                        <td>Plugins</td>\n                                        <td class=\"text-center\">2</td>\n                                        <td class=\"text-center\">15</td>\n                                    </tr>\n                                    <tr>\n                                        <td>Example Pages</td>\n                                        <td class=\"text-center\">3</td>\n                                        <td class=\"text-center\">27</td>\n                                    </tr>\n                                    <tr>\n                                        <td>Login, Register, Pricing, Lock Pages</td>\n                                        <td class=\"text-center\"><i class=\"fa fa-times text-danger\"></i></td>\n                                        <td class=\"text-center\"><i class=\"fa fa-check text-success\"></i></td>\n                                    </tr>\n                                    <tr>\n                                        <td>DataTables, VectorMap, SweetAlert, Wizard, jQueryValidation, FullCalendar etc...</td>\n                                        <td class=\"text-center\"><i class=\"fa fa-times text-danger\"></i></td>\n                                        <td class=\"text-center\"><i class=\"fa fa-check text-success\"></i></td>\n                                    </tr>\n                                    <tr>\n                                        <td>Mini Sidebar</td>\n                                        <td class=\"text-center\"><i class=\"fa fa-times text-danger\"></i></td>\n                                        <td class=\"text-center\"><i class=\"fa fa-check text-success\"></i></td>\n                                    </tr>\n                                    <tr>\n                                        <td>Premium Support</td>\n                                        <td class=\"text-center\"><i class=\"fa fa-times text-danger\"></i></td>\n                                        <td class=\"text-center\"><i class=\"fa fa-check text-success\"></i></td>\n                                    </tr>\n                                    <tr>\n                                        <td></td>\n                                        <td class=\"text-center\">Free</td>\n                                        <td class=\"text-center\">Just $49</td>\n                                    </tr>\n                                    <tr>\n                                        <td class=\"text-center\"></td>\n                                        <td class=\"text-center\">\n                                            <a href=\"#\" class=\"btn btn-round btn-fill btn-default disabled\">Current Version</a>\n                                        </td>\n                                        <td class=\"text-center\">\n                                            <a target=\"_blank\" href=\"https://www.creative-tim.com/product/material-dashboard-pro-angular2/?ref=md-free-angular-upgrade-local\" class=\"btn btn-round btn-fill btn-info\">Upgrade to PRO</a>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 579:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\" data-background-color=\"red\">\r\n                        <h2 class=\"title\">About Our Captians</h2>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <div class=\"card card-profile\">\r\n                    <div class=\"card-avatar\">\r\n                        <a href=\"#pablo\">\r\n                        <img class=\"img\" src=\"../assets/img/faces/partner11.jpg\" />\r\n                    </a>\r\n                    </div>\r\n                    <div class=\"content\">\r\n                        <h6 class=\"category text-gray\">{{team.partner1.desig}}</h6>\r\n                        <h4 class=\"card-title\">{{team.partner1.name}}</h4>\r\n                        <p class=\"card-content\">\r\n                            {{team.partner1.description}}\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <div class=\"card card-profile\">\r\n                    <div class=\"card-avatar\">\r\n                        <a href=\"#pablo\">\r\n                        <img class=\"img\" src=\"../assets/img/faces/partner22.jpg\" />\r\n                    </a>\r\n                    </div>\r\n\r\n                    <div class=\"content\">\r\n                        <h6 class=\"category text-gray\">{{team.partner2.desig}}</h6>\r\n                        <h4 class=\"card-title\">{{team.partner2.name}}</h4>\r\n                        <p class=\"card-content\">\r\n                            {{team.partner2.description}}\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\" data-background-color=\"red\">\r\n                        <h2 class=\"title\">About our Team - AUDACITY RIDERS</h2>\r\n                    </div>\r\n                    <div class=\"card-content\">\r\n                        <img class=\"img\" src=\"../assets/img/faces/team.jpg\" style=\"width: 50%;float: left;margin: 5px;padding-right: 20px;\" />\r\n                        <p>{{team.description}}\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 580:
/***/ (function(module, exports) {

module.exports = "<footer>\n    <div class=\"container-fluid\">\n        <nav class=\"pull-left\">\n            <ul>\n                <li>\n                    <a href=\"#\">\n                        Home\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\">\n                        Company\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\">\n                        Portfolio\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\">\n                       Blog\n                    </a>\n                </li>\n            </ul>\n        </nav>\n        <p class=\"copyright pull-right\">\n            &copy; {{test | date: 'yyyy'}} <a href=\"http://www.creative-tim.com\">Creative Tim</a>, made with love for a better web\n        </p>\n    </div>\n</footer>\n"

/***/ }),

/***/ 581:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-transparent\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n             <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\">\r\n                <span class=\"sr-only\">Toggle navigation</span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n            </button>\r\n            <div class=\"logo\">\r\n                <img src=\"../assets/img/Freebird-Logo.png\" alt=\"{{getTitle()}}\"  [routerLink]=\"['/Home']\" role=\"link\">\r\n            </div>            \r\n            <a class=\"navbar-brand\"  [routerLink]=\"['/Home']\" role=\"link\">{{getTitle()}}</a>\r\n        </div>\r\n        <div class=\"collapse navbar-collapse\">\r\n            <ul class=\"nav nav-pills nav-pills-icons nav-pills-primary\">\r\n                <li routerLinkActive=\"active\" role=\"link\">\r\n                    <a [routerLink]=\"['/AboutOurCafe']\">\r\n\t\t\t            <i class=\"material-icons\">directions_bike</i>\r\n                        About Our Cafe\r\n                    </a>\r\n                </li>\r\n                <li routerLinkActive=\"active\" role=\"link\">\r\n                    <a [routerLink]=\"['/OurGallery']\">\r\n                        <i class=\"material-icons\">camera_enhance</i>  \r\n                        Our Gallery\r\n                    </a>\r\n                </li>\r\n\r\n                <li routerLinkActive=\"active\" role=\"link\">\r\n                    <a [routerLink]=\"['/OurMenu']\">\r\n                        <i class=\"material-icons\">local_dining</i>\r\n                        Our Menu\r\n                    </a>\r\n                </li>\r\n                <li routerLinkActive=\"active\" role=\"link\">\r\n                    <a [routerLink]=\"['/BookaTable']\">\r\n                        <i class=\"material-icons\">schedule</i>\r\n                        Book a Table\r\n                    </a>\r\n                </li>\r\n                <li routerLinkActive=\"active\" role=\"link\">\r\n                    <a [routerLink]=\"['/LatestNewsandEvents']\">\r\n                        <i class=\"material-icons\">schedule</i>\r\n                        Latest News and Events\r\n                    </a>\r\n                </li>\r\n                <li routerLinkActive=\"active\" role=\"link\">\r\n                    <a [routerLink]=\"['/ContactUs']\">\r\n                        <i class=\"material-icons\">face</i>\r\n                        Contact US\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>\r\n<!-- role=\"tab\" data-toggle=\"tab\" -->\r\n"

/***/ }),

/***/ 582:
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\">\n    <a href=\"https://www.creative-tim.com\" class=\"simple-text\">\n        <div class=\"logo-img\">\n            <img src=\"/assets/img/angular2-logo-red.png\"/>\n        </div>\n        Creative Tim\n    </a>\n</div>\n<div class=\"sidebar-wrapper\">\n    <div class=\"nav-container\">\n        <ul class=\"nav\">\n            <li *ngFor=\"let menuItem of menuItems\" routerLinkActive=\"active\" class=\"{{menuItem.class}}\">\n                <a  [routerLink]=\"[menuItem.path]\">\n                    <i class=\"material-icons\">{{menuItem.icon}}</i>\n                    <p>{{menuItem.title}}</p>\n                </a>\n            </li>\n        </ul>\n    </div>\n</div>\n"

/***/ }),

/***/ 716:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(546);


/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(1);
var http_1 = __webpack_require__(211);
var Observable_1 = __webpack_require__(23);
var http_2 = __webpack_require__(211);
__webpack_require__(529);
__webpack_require__(530);
__webpack_require__(528);
var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.webDataConfig = null;
    }
    // getWebData(): Observable<any> {
    //     //    let params = new URLSearchParams();
    //     //     params.set('TaskId', taskId);
    //     if (this.webDataConfig) {
    //         return Observable.of(this.webDataConfig);
    //     }
    //     else {
    //         return this.http.get("/api/fetchWebData")
    //         .map(this.extractData.bind(this))
    //         .catch(this.handleError);
    //     }
    // }
    DataService.prototype.getWebData = function () {
        return Observable_1.Observable.of({});
    };
    ;
    DataService.prototype.extractData = function (res) {
        var body = res.json();
        if (body.Error) {
            return body.Error;
        }
        else {
            this.webDataConfig = body;
            return body || {};
        }
    };
    DataService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    DataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_2.Http !== 'undefined' && http_2.Http) === 'function' && _a) || Object])
    ], DataService);
    return DataService;
    var _a;
}());
exports.DataService = DataService;
//# sourceMappingURL=dataService.js.map

/***/ })

},[716]);
//# sourceMappingURL=main.bundle.js.map