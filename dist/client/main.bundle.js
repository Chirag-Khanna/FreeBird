webpackJsonp([1],{

/***/ 220:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 220;

/***/ }),

/***/ 221:
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

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var platform_browser_dynamic_1 = __webpack_require__(474);
var core_1 = __webpack_require__(0);
var environment_1 = __webpack_require__(379);
var app_module_1 = __webpack_require__(361);
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 360:
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
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(24);
var dataService_1 = __webpack_require__(44);
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
            template: __webpack_require__(381)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof common_1.Location !== 'undefined' && common_1.Location) === 'function' && _a) || Object, (typeof (_b = typeof dataService_1.DataService !== 'undefined' && dataService_1.DataService) === 'function' && _b) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(338)))

/***/ }),

/***/ 361:
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
var core_1 = __webpack_require__(0);
var platform_browser_1 = __webpack_require__(131);
var router_1 = __webpack_require__(91);
var http_1 = __webpack_require__(178);
var app_component_1 = __webpack_require__(360);
var dashboard_component_1 = __webpack_require__(362);
var dashboard_module_1 = __webpack_require__(363);
var sidebar_module_1 = __webpack_require__(378);
var footer_module_1 = __webpack_require__(374);
var navbar_module_1 = __webpack_require__(376);
var dataService_1 = __webpack_require__(44);
var common_1 = __webpack_require__(24);
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
                http_1.HttpModule
            ],
            declarations: [app_component_1.AppComponent, dashboard_component_1.DashboardComponent],
            providers: [{ provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }, dataService_1.DataService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 362:
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
var core_1 = __webpack_require__(0);
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
            template: __webpack_require__(382)
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 363:
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
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(24);
var router_1 = __webpack_require__(91);
var dashboard_routes_1 = __webpack_require__(364);
var DashboardModule = (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule,
                router_1.RouterModule.forChild(dashboard_routes_1.MODULE_ROUTES)
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

/***/ 364:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var home_component_1 = __webpack_require__(365);
var user_component_1 = __webpack_require__(372);
var icons_component_1 = __webpack_require__(366);
var table_component_1 = __webpack_require__(369);
var notifications_component_1 = __webpack_require__(368);
var typography_component_1 = __webpack_require__(370);
var maps_component_1 = __webpack_require__(367);
var upgrade_component_1 = __webpack_require__(371);
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

/***/ 365:
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
var core_1 = __webpack_require__(0);
var dataService_1 = __webpack_require__(44);
var HomeComponent = (function () {
    function HomeComponent(dataservice) {
        this.dataservice = dataservice;
        this.items = [{
                head: "Juicebar",
                subject: "Meet the new kiwi juice. Meet the new kiwi juice. Meet the new kiwi juice."
            },
            {
                head: "Cycle Warehouse",
                subject: "Meet our monster Fat Cycle"
            }
        ];
        this.cafeServices = ["We are a bunch of bicycle lovers who would like to share our experience with other companions. We have a pretty decent collection of armours for people like us.",
            "Alongside we also take care of your taste buds with some delicious cuisines from all around the world. To cater the health freaks we have some really awesome juice and shake bar, to try all possible variants of the world",
            "U can also share the creative insight of your team with us, in our really cool Amphitheater."
        ];
        this.customReviews = [
            {
                reviewer: "XYZ",
                review: "Great Ambiencce",
                date: "13/08/2017"
            },
            {
                reviewer: "XYZ",
                review: "Great Ambience",
                date: "13/08/2017"
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
            template: __webpack_require__(383)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof dataService_1.DataService !== 'undefined' && dataService_1.DataService) === 'function' && _a) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 366:
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
var core_1 = __webpack_require__(0);
var dataService_1 = __webpack_require__(44);
var IconsComponent = (function () {
    function IconsComponent(dataservice) {
        this.dataservice = dataservice;
    }
    IconsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataservice.getWebData()
            .subscribe(function (result) {
            _this.websiteDataConfig = result;
        });
    };
    IconsComponent = __decorate([
        core_1.Component({
            selector: 'icons-cmp',
            template: __webpack_require__(384)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof dataService_1.DataService !== 'undefined' && dataService_1.DataService) === 'function' && _a) || Object])
    ], IconsComponent);
    return IconsComponent;
    var _a;
}());
exports.IconsComponent = IconsComponent;
//# sourceMappingURL=icons.component.js.map

/***/ }),

/***/ 367:
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
var core_1 = __webpack_require__(0);
var dataService_1 = __webpack_require__(44);
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
                subject: "9999999999"
            }
        ];
        this.showroom = [
            {
                head: "Address:",
                subject: "Gurgoan-Faridabad Road"
            },
            {
                head: "Contact No:",
                subject: "9999999999"
            }
        ];
    }
    MapsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataservice.getWebData()
            .subscribe(function (result) {
            _this.websiteDataConfig = result;
        });
        var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
        var mapOptions = {
            zoom: 13,
            center: myLatlng,
            scrollwheel: false,
            styles: [{ "featureType": "water", "stylers": [{ "saturation": 43 }, { "lightness": -11 }, { "hue": "#0088ff" }] }, { "featureType": "road", "elementType": "geometry.fill", "stylers": [{ "hue": "#ff0000" }, { "saturation": -100 }, { "lightness": 99 }] }, { "featureType": "road", "elementType": "geometry.stroke", "stylers": [{ "color": "#808080" }, { "lightness": 54 }] }, { "featureType": "landscape.man_made", "elementType": "geometry.fill", "stylers": [{ "color": "#ece2d9" }] }, { "featureType": "poi.park", "elementType": "geometry.fill", "stylers": [{ "color": "#ccdca1" }] }, { "featureType": "road", "elementType": "labels.text.fill", "stylers": [{ "color": "#767676" }] }, { "featureType": "road", "elementType": "labels.text.stroke", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "poi", "stylers": [{ "visibility": "off" }] }, { "featureType": "landscape.natural", "elementType": "geometry.fill", "stylers": [{ "visibility": "on" }, { "color": "#b8cb93" }] }, { "featureType": "poi.park", "stylers": [{ "visibility": "on" }] }, { "featureType": "poi.sports_complex", "stylers": [{ "visibility": "on" }] }, { "featureType": "poi.medical", "stylers": [{ "visibility": "on" }] }, { "featureType": "poi.business", "stylers": [{ "visibility": "simplified" }] }]
        };
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        var marker = new google.maps.Marker({
            position: myLatlng,
            title: "Hello World!"
        });
        // To add the marker to the map, call setMap();
        marker.setMap(map);
    };
    MapsComponent = __decorate([
        core_1.Component({
            selector: 'maps-cmp',
            template: __webpack_require__(385)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof dataService_1.DataService !== 'undefined' && dataService_1.DataService) === 'function' && _a) || Object])
    ], MapsComponent);
    return MapsComponent;
    var _a;
}());
exports.MapsComponent = MapsComponent;
//# sourceMappingURL=maps.component.js.map

/***/ }),

/***/ 368:
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
var core_1 = __webpack_require__(0);
var NotificationsComponent = (function () {
    function NotificationsComponent() {
    }
    NotificationsComponent = __decorate([
        core_1.Component({
            selector: 'notifications-cmp',
            template: __webpack_require__(386)
        }), 
        __metadata('design:paramtypes', [])
    ], NotificationsComponent);
    return NotificationsComponent;
}());
exports.NotificationsComponent = NotificationsComponent;
//# sourceMappingURL=notifications.component.js.map

/***/ }),

/***/ 369:
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
var core_1 = __webpack_require__(0);
var dataService_1 = __webpack_require__(44);
var TableComponent = (function () {
    function TableComponent(dataservice) {
        this.dataservice = dataservice;
        this.CafImgs = [
            ['../../../assets/img/gall1.jpg', '../../../assets/img/gall2.jpg', '../../../assets/img/gall3.jpg'],
            ['../../../assets/img/gall1.jpg', '../../../assets/img/gall2.jpg', '../../../assets/img/gall3.jpg'],
            ['../../../assets/img/gall1.jpg', '../../../assets/img/gall2.jpg', '../../../assets/img/gall3.jpg'],
            ['../../../assets/img/gall1.jpg', '../../../assets/img/gall2.jpg', '../../../assets/img/gall3.jpg'],
            ['../../../assets/img/gall1.jpg', '../../../assets/img/gall2.jpg', '../../../assets/img/gall3.jpg']
        ];
        this.prodImgs = [
            ['../../assets/img/product1.jpg', '../../../assets/img/product2.jpg', '../../../assets/img/product3.jpg', '../../../assets/img/product4.jpg', '../../../assets/img/product5.jpg'],
            ['../../assets/img/product1.jpg', '../../../assets/img/product2.jpg', '../../../assets/img/product3.jpg', '../../../assets/img/product4.jpg', '../../../assets/img/product5.jpg'],
            ['../../assets/img/product1.jpg', '../../../assets/img/product2.jpg', '../../../assets/img/product3.jpg', '../../../assets/img/product4.jpg', '../../../assets/img/product5.jpg'],
            ['../../assets/img/product1.jpg', '../../../assets/img/product2.jpg', '../../../assets/img/product3.jpg', '../../../assets/img/product4.jpg', '../../../assets/img/product5.jpg'],
            ['../../assets/img/product1.jpg', '../../../assets/img/product2.jpg', '../../../assets/img/product3.jpg', '../../../assets/img/product4.jpg', '../../../assets/img/product5.jpg']
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
            template: __webpack_require__(387)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof dataService_1.DataService !== 'undefined' && dataService_1.DataService) === 'function' && _a) || Object])
    ], TableComponent);
    return TableComponent;
    var _a;
}());
exports.TableComponent = TableComponent;
//# sourceMappingURL=table.component.js.map

/***/ }),

/***/ 370:
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
var core_1 = __webpack_require__(0);
var dataService_1 = __webpack_require__(44);
var TypographyComponent = (function () {
    function TypographyComponent(dataservice) {
        this.dataservice = dataservice;
        this.bookingOptions = [
            { path: "../../../assets/img/terrace.jpg", caption: "Terrace Cafe" },
            { path: "../../../assets/img/funkyYard.jpg", caption: "FunkyYard" },
            { path: "../../../assets/img/relaxArea.jpg", caption: "Relaxing Area" },
            { path: "../../../assets/img/amphitheater.jpg", caption: "Amphi-Theater" }
        ];
    }
    TypographyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataservice.getWebData()
            .subscribe(function (result) {
            _this.websiteDataConfig = result;
        });
    };
    TypographyComponent = __decorate([
        core_1.Component({
            selector: 'typography-cmp',
            template: __webpack_require__(388)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof dataService_1.DataService !== 'undefined' && dataService_1.DataService) === 'function' && _a) || Object])
    ], TypographyComponent);
    return TypographyComponent;
    var _a;
}());
exports.TypographyComponent = TypographyComponent;
//# sourceMappingURL=typography.component.js.map

/***/ }),

/***/ 371:
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
var core_1 = __webpack_require__(0);
var UpgradeComponent = (function () {
    function UpgradeComponent() {
    }
    UpgradeComponent = __decorate([
        core_1.Component({
            selector: 'upgrade-cmp',
            template: __webpack_require__(389)
        }), 
        __metadata('design:paramtypes', [])
    ], UpgradeComponent);
    return UpgradeComponent;
}());
exports.UpgradeComponent = UpgradeComponent;
//# sourceMappingURL=upgrade.component.js.map

/***/ }),

/***/ 372:
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
var core_1 = __webpack_require__(0);
var dataService_1 = __webpack_require__(44);
var UserComponent = (function () {
    function UserComponent(dataservice) {
        this.dataservice = dataservice;
        this.team = {
            partner1: {
                desig: "Freebird's Pilot/India's Youth!!:p (Software Engineer)",
                name: "Himanshu",
                description: "Works with an MNC as a software engineer. Co-owner and visionary of FreeBird Cafe"
            },
            partner2: {
                desig: "Freebird's Pilot/GST Benificary!!:p (Chartered Accountant)",
                name: "Ankit",
                description: "Works with an MNC as a chartered accountant. Co-owner and visionary of FreeBird Cafe"
            },
            description: "We are an enthusiastic bunch of cycle riders, working around on weekdays to earn money for weekend cycle trips and to buy our giant armours."
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
            template: __webpack_require__(390)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof dataService_1.DataService !== 'undefined' && dataService_1.DataService) === 'function' && _a) || Object])
    ], UserComponent);
    return UserComponent;
    var _a;
}());
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ 373:
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
var core_1 = __webpack_require__(0);
var FooterComponent = (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent = __decorate([
        core_1.Component({
            selector: 'footer-cmp',
            template: __webpack_require__(391)
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;
//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 374:
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
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(24);
var router_1 = __webpack_require__(91);
var footer_component_1 = __webpack_require__(373);
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

/***/ 375:
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
var core_1 = __webpack_require__(0);
var sidebar_routes_config_1 = __webpack_require__(221);
var common_1 = __webpack_require__(24);
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
        return 'FreeBird Cafe';
    };
    NavbarComponent = __decorate([
        core_1.Component({
            selector: 'navbar-cmp',
            template: __webpack_require__(392)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof common_1.Location !== 'undefined' && common_1.Location) === 'function' && _a) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a;
}());
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 376:
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
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(24);
var router_1 = __webpack_require__(91);
var navbar_component_1 = __webpack_require__(375);
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

/***/ 377:
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
var core_1 = __webpack_require__(0);
var sidebar_routes_config_1 = __webpack_require__(221);
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
            template: __webpack_require__(393),
        }), 
        __metadata('design:paramtypes', [])
    ], SidebarComponent);
    return SidebarComponent;
}());
exports.SidebarComponent = SidebarComponent;
//# sourceMappingURL=sidebar.component.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(338)))

/***/ }),

/***/ 378:
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
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(24);
var router_1 = __webpack_require__(91);
var sidebar_component_1 = __webpack_require__(377);
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

/***/ 379:
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

/***/ 381:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <navbar-cmp></navbar-cmp>\n    <div class=\"main-panel\">         \n        <dashboard-cmp [websiteDataConfig]=\"websiteDataConfig\"></dashboard-cmp>\n        <!-- <div *ngIf=\"isMaps('/maps')\">\n            <footer-cmp></footer-cmp>\n        </div> -->\n    </div>\n</div>\n"

/***/ }),

/***/ 382:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ 383:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-lg-10 col-lg-offset-1 \">\n                <div id=\"carousel-example-generic\" class=\"carousel slide carouselHeight\" data-ride=\"carousel\">\n                    <!-- Indicators -->\n                    <ol class=\"carousel-indicators\">\n                        <li data-target=\"#carousel-example-generic\" data-slide-to=\"0\" class=\"active\"></li>\n                        <li data-target=\"#carousel-example-generic\" data-slide-to=\"1\"></li>\n                        <li data-target=\"#carousel-example-generic\" data-slide-to=\"2\"></li>\n                        <li data-target=\"#carousel-example-generic\" data-slide-to=\"3\"></li>\n                        <li data-target=\"#carousel-example-generic\" data-slide-to=\"4\"></li>\n                    </ol>\n\n                    <!-- Wrapper for slides -->\n                    <div class=\"carousel-inner\">\n                        <div class=\"item active\">\n                            <img src=\"../../../assets/img/cyclecafe.jpg\" width=\"100%\" height=\"100%\" alt=\"...\">\n                            <div class=\"carousel-caption\">\n                                <h3>Cafe Environment</h3>\n                            </div>\n                        </div>\n                        <div class=\"item\">\n                            <img src=\"../../../assets/img/cyclecafe2.jpg\" width=\"100%\" height=\"100%\" alt=\"...\">\n                            <div class=\"carousel-caption\">\n                                <h3>Cozy an Comfortable Backyard</h3>\n                            </div>\n                        </div>\n                        <div class=\"item\">\n                            <img src=\"../../../assets/img/amphitheater.jpg\" width=\"100%\" height=\"100%\" alt=\"...\">\n                            <div class=\"carousel-caption\">\n                                <h3>Amphitheater for Live Events</h3>\n                            </div>\n                        </div>\n                        <div class=\"item\">\n                            <img src=\"../../../assets/img/caferes.jpg\" width=\"100%\" height=\"100%\" alt=\"...\">\n                            <div class=\"carousel-caption\">\n                                <h3>Family Restaurant Space</h3>\n                            </div>\n                        </div>\n                        <div class=\"item\">\n                            <img src=\"../../../assets/img/cycleEvent.png\" width=\"100%\" height=\"100%\" alt=\"...\">\n                            <div class=\"carousel-caption\">\n                                <h3>Cycling events organized</h3>\n                            </div>\n                        </div>\n                    </div>\n\n                    <!-- Controls -->\n                    <a class=\"left carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"prev\">\n                    </a>\n                    <a class=\"right carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"next\">\n                    </a>\n                </div>\n                <!-- Carousel -->\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-lg-4 col-md-8\">\n                <div class=\"card\">\n                    <div class=\"card-header\" data-background-color=\"orange\">\n                        <h3 class=\"title\">Today's Special</h3>\n                    </div>\n                    <div class=\"card-content\">\n                        <table class=\"table\">\n                            <tbody>\n                                <tr *ngFor=\"let item of items\">\n                                    <td>\n                                        <label>{{item.head}}:</label>\n                                    </td>\n                                    <td>\n                                        <p>{{item.subject}}</p>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-lg-8 col-md-16\">\n                <div class=\"card\">\n                    <div class=\"card-header\" data-background-color=\"orange\">\n                        <h3 class=\"title\">Our Services</h3>\n                    </div>\n                    <div class=\"card-content\">\n                        <ul>\n                            <li *ngFor=\"let serv of cafeServices\">{{serv}}</li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-lg-12 col-md-24\">\n                <div class=\"card\">\n                    <div class=\"card-header\" data-background-color=\"orange\">\n                        <h3 class=\"title\">Customer Reviews</h3>\n                    </div>\n                    <div class=\"card-content reviews\">\n                        <blockquote *ngFor=\"let review of customReviews\">\n                            <p>{{review.review}}\n                            </p>\n                            <small>\n                                 {{review.reviewer}}\n                                 </small>\n                                <small class=\"text-right\">\n                                {{ review.date}}\n                                 </small>\n                        </blockquote>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n\n        <!-- <div class=\"row\">\n            <div class=\"col-md-4\">\n                <div class=\"card\">\n                    <div class=\"card-header card-chart\" data-background-color=\"green\">\n                        <div class=\"ct-chart\" id=\"dailySalesChart\"></div>\n                    </div>\n                    <div class=\"card-content\">\n                        <h4 class=\"title\">Daily Sales</h4>\n                        <p class=\"category\"><span class=\"text-success\"><i class=\"fa fa-long-arrow-up\"></i> 55%  </span> increase in today sales.</p>\n                    </div>\n                    <div class=\"card-footer\">\n                        <div class=\"stats\">\n                            <i class=\"material-icons\">access_time</i> updated 4 minutes ago\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-md-4\">\n                <div class=\"card\">\n                    <div class=\"card-header card-chart\" data-background-color=\"orange\">\n                        <div class=\"ct-chart\" id=\"emailsSubscriptionChart\"></div>\n                    </div>\n                    <div class=\"card-content\">\n                        <h4 class=\"title\">Email Subscriptions</h4>\n                        <p class=\"category\">Last Campaign Performance</p>\n                    </div>\n                    <div class=\"card-footer\">\n                        <div class=\"stats\">\n                            <i class=\"material-icons\">access_time</i> campaign sent 2 days ago\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n\n            <div class=\"col-md-4\">\n                <div class=\"card\">\n                    <div class=\"card-header card-chart\" data-background-color=\"red\">\n                        <div class=\"ct-chart\" id=\"completedTasksChart\"></div>\n                    </div>\n                    <div class=\"card-content\">\n                        <h4 class=\"title\">Completed Tasks</h4>\n                        <p class=\"category\">Last Campaign Performance</p>\n                    </div>\n                    <div class=\"card-footer\">\n                        <div class=\"stats\">\n                            <i class=\"material-icons\">access_time</i> campaign sent 2 days ago\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div> -->\n    </div>\n</div>"

/***/ }),

/***/ 384:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card card-plain\">\n                    <div class=\"card-header\" data-background-color=\"red\">\n                        <h4 class=\"title\">Material Design Icons</h4>\n                        <p class=\"category\">Handcrafted by our friends from <a target=\"_blank\" href=\"https://design.google.com/icons/\">Google</a></p>\n                    </div>\n                    <div class=\"card-content\">\n                        <div class=\"iframe-container hidden-sm hidden-xs\">\n                            <iframe src=\"https://design.google.com/icons/\">\n                                <p>Your browser does not support iframes.</p>\n                            </iframe>\n                        </div>\n                        <div class=\"col-md-6 hidden-lg hidden-md text-center\">\n                            <h5>The icons are visible on Desktop mode inside an iframe. Since the iframe is not working on Mobile and Tablets please visit the icons on their original page on Google. Check the  <a href=\"https://design.google.com/icons/\" target=\"_blank\">Material Icons</a></h5>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 385:
/***/ (function(module, exports) {

module.exports = "<div id=\"map\"></div>\n<div id=\"contact details\">\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <div class=\"card\">\n                <div class=\"card-header\" data-background-color=\"green\">\n                    <h4 class=\"title\">FreeBird Cafe</h4>\n                </div>\n                 <div class=\"card-content\">\n                    <div class=\"tab-content\">\n                            <div class=\"tab-pane active\" id=\"profile\">\n                                <table class=\"table\">\n                                    <tbody>\n                                        <tr *ngFor=\"let item of cafe\">\n                                            <td>\n                                                <label>{{item.head}} :</label>\n                                            </td>\n                                            <td>\n                                                <p>{{item.subject}}</p>\n                                            </td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n                </div>\n                <div class=\"card-footer\">\n                    <div class=\"stats\">\n                        <i class=\"material-icons\">access_time</i> updated 4 minutes ago\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"col-md-6\">\n            <div class=\"card\">\n                <div class=\"card-header\" data-background-color=\"orange\">\n                    <h4 class=\"title\">FreeBird Cycle Yard</h4>\n                </div>\n                <div class=\"card-content\">\n                    <div class=\"tab-content\">\n                            <div class=\"tab-pane active\" id=\"profile\">\n                                <table class=\"table\">\n                                    <tbody>\n                                        <tr *ngFor=\"let item of showroom\">\n                                            <td>\n                                                <label>{{item.head}} :</label>\n                                            </td>\n                                            <td>\n                                                <p>{{item.subject}}</p>\n                                            </td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n                </div>\n                <div class=\"card-footer\">\n                    <div class=\"stats\">\n                        <i class=\"material-icons\">access_time</i> campaign sent 2 days ago\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 386:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"card\">\n            <div class=\"card-header\" data-background-color=\"red\">\n                <h4 class=\"title\">Notifications</h4>\n                <p class=\"category\">Handcrafted by our friend <a target=\"_blank\" href=\"https://github.com/mouse0270\">Robert McIntosh</a>. Please checkout the <a href=\"http://bootstrap-notify.remabledesigns.com/\" target=\"_blank\">full documentation.</a></p>\n            </div>\n            <div class=\"card-content\">\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <h5>Notifications Style</h5>\n                        <div class=\"alert alert-info\">\n                            <span>This is a plain notification</span>\n                        </div>\n                        <div class=\"alert alert-info\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span>This is a notification with close button.</span>\n                        </div>\n                        <div class=\"alert alert-info alert-with-icon\" data-notify=\"container\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <i data-notify=\"icon\" class=\"material-icons\">add_alert</i>\n                            <span data-notify=\"message\">This is a notification with close button and icon.</span>\n                        </div>\n                        <div class=\"alert alert-info alert-with-icon\" data-notify=\"container\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <i data-notify=\"icon\" class=\"material-icons\">add_alert</i>\n                            <span data-notify=\"message\">This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.</span>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <h5>Notification states</h5>\n                        <div class=\"alert alert-info\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span><b> Info - </b> This is a regular notification made with \".alert-info\"</span>\n                        </div>\n                        <div class=\"alert alert-success\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span><b> Success - </b> This is a regular notification made with \".alert-success\"</span>\n                        </div>\n                        <div class=\"alert alert-warning\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span><b> Warning - </b> This is a regular notification made with \".alert-warning\"</span>\n                        </div>\n                        <div class=\"alert alert-danger\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span><b> Danger - </b> This is a regular notification made with \".alert-danger\"</span>\n                        </div>\n                        <div class=\"alert alert-primary\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span><b> Primary - </b> This is a regular notification made with \".alert-primary\"</span>\n                        </div>\n                    </div>\n                </div>\n\n                <br>\n                <br>\n\n                <div class=\"places-buttons\">\n                    <div class=\"row\">\n                        <div class=\"col-md-6 col-md-offset-3 text-center\">\n                            <h5>Notifications Places\n                                <p class=\"category\">Click to view notifications</p>\n                            </h5>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-8 col-md-offset-2\">\n                            <div class=\"col-md-4\">\n                                <button class=\"btn btn-danger btn-block\" onclick=\"demo.showNotification('top','left')\">Top Left</button>\n                            </div>\n                            <div class=\"col-md-4\">\n                                <button class=\"btn btn-danger btn-block\" onclick=\"demo.showNotification('top','center')\">Top Center</button>\n                            </div>\n                            <div class=\"col-md-4\">\n                                <button class=\"btn btn-danger btn-block\" onclick=\"demo.showNotification('top','right')\">Top Right</button>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-8 col-md-offset-2\">\n                            <div class=\"col-md-4\">\n                                <button class=\"btn btn-danger btn-block\" onclick=\"demo.showNotification('bottom','left')\">Bottom Left</button>\n                            </div>\n                            <div class=\"col-md-4\">\n                                <button class=\"btn btn-danger btn-block\" onclick=\"demo.showNotification('bottom','center')\">Bottom Center</button>\n                            </div>\n                            <div class=\"col-md-4\">\n                                <button class=\"btn btn-danger btn-block\" onclick=\"demo.showNotification('bottom','right')\">Bottom Right</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 387:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card card-plain\">\n                    <div class=\"card-header\" data-background-color=\"red\">\n                        <h4 class=\"title\">Glimpse of our Cafe</h4>\n                    </div>\n                    <div class=\"card-content table-responsive\">\n                        <table class=\"table\">\n                            <tbody>\n                                <tr *ngFor=\"let rowImg of CafImgs\">\n                                    <td *ngFor=\"let colImgPath of rowImg\"><img class=\"img-rounded\" src={{colImgPath}}/></td>\n                                </tr>                                                              \n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card card-plain\">\n                    <div class=\"card-header\" data-background-color=\"red\">\n                        <h4 class=\"title\">Products Offered</h4>\n                    </div>\n                    <div class=\"card-content table-responsive\">\n                        <table class=\"table\">\n                            <tbody>\n                                <tr *ngFor=\"let rowImg of prodImgs\">\n                                    <td *ngFor=\"let colImgPath of rowImg\"><img class=\"img-rounded\" src={{colImgPath}} style=\"width:200px; height:200px\"/></td>\n                                </tr>                                                              \n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 388:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    <div class=\"card\">\n                        <div class=\"card-header\" data-background-color=\"red\">\n                            <h2 class=\"title\">Book a Table</h2>\n                        </div>\n                        <div class=\"card-content\">\n                            <form>\n                                <div class=\"row\">\n                                    <div class=\"col-md-6\">\n                                        <div class=\"form-group form-black label-floating is-empty\">\n                                            <label class=\"control-label\">First Name</label>\n                                            <input type=\"text\" class=\"form-control\">\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-6\">\n                                        <div class=\"form-group form-black label-floating is-empty\">\n                                            <label class=\"control-label\">Last Name</label>\n                                            <input type=\"text\" class=\"form-control\">\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"row\">\n                                    <div class=\"col-md-6\">\n                                        <div class=\"form-group form-black label-floating is-empty\">\n                                            <label class=\"control-label\">Number of Guest</label>\n                                            <input type=\"text\" class=\"form-control\">\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-6\">\n                                        <div class=\"form-group form-black label-floating is-empty\">\n                                            <label class=\"control-label\">Mobile Number</label>\n                                            <input type=\"text\" class=\"form-control\">\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"row\">\n                                    <div class=\"col-md-12\">\n                                        <label>Cafe Area</label>\n                                        <div class=\"form-group form-black label-floating is-empty\">\n                                            <select class=\"form-control\">\n                                                <option>Terrace</option>\n                                                <option>Relaxing Area</option>\n                                                <option>FunkYard</option>\n                                                <option>Amphi-Theater</option>\n                                            </select>\n                                        </div>\n                                    </div>\n                                </div>\n                                <button type=\"submit\" class=\"btn btn-danger pull-right\">Book the Table</button>\n                                <div class=\"clearfix\"></div>\n                            </form>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"card card-plain\">\n                        <div class=\"card-header\" data-background-color=\"red\">\n                            <h4 class=\"title\">Glimpse of our Cafe</h4>\n                        </div>\n                        <div class=\"card-content table-responsive\">\n                            <table class=\"table\">\n                                <tbody>\n                                    <tr *ngFor=\"let rowImg of bookingOptions\">\n                                        <td><img class=\"img-rounded\" src={{rowImg.path}}/>\n                                            <div class=\"caption\">\n                                                <h6 class=\"text-center imgCapt\">{{rowImg.caption}}</h6>\n                                            </div>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 389:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-8 col-md-offset-2\">\n                <div class=\"card\">\n                    <div class=\"card-header text-center\" data-background-color=\"red\">\n                        <h4 class=\"title\">Material Dashboard PRO</h4>\n                        <p class=\"category\">Are you looking for more components? Please check our Premium Version of Material Dashboard.</p>\n                    </div>\n                    <div class=\"card-content\">\n                        <div class=\"table-responsive table-upgrade\">\n                            <table class=\"table\">\n                                <thead>\n                                    <tr>\n                                        <th></th>\n                                        <th class=\"text-center\">Free</th>\n                                        <th class=\"text-center\">PRO</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr>\n                                        <td>Components</td>\n                                        <td class=\"text-center\">60</td>\n                                        <td class=\"text-center\">200</td>\n                                    </tr>\n                                    <tr>\n                                        <td>Plugins</td>\n                                        <td class=\"text-center\">2</td>\n                                        <td class=\"text-center\">15</td>\n                                    </tr>\n                                    <tr>\n                                        <td>Example Pages</td>\n                                        <td class=\"text-center\">3</td>\n                                        <td class=\"text-center\">27</td>\n                                    </tr>\n                                    <tr>\n                                        <td>Login, Register, Pricing, Lock Pages</td>\n                                        <td class=\"text-center\"><i class=\"fa fa-times text-danger\"></i></td>\n                                        <td class=\"text-center\"><i class=\"fa fa-check text-success\"></i></td>\n                                    </tr>\n                                    <tr>\n                                        <td>DataTables, VectorMap, SweetAlert, Wizard, jQueryValidation, FullCalendar etc...</td>\n                                        <td class=\"text-center\"><i class=\"fa fa-times text-danger\"></i></td>\n                                        <td class=\"text-center\"><i class=\"fa fa-check text-success\"></i></td>\n                                    </tr>\n                                    <tr>\n                                        <td>Mini Sidebar</td>\n                                        <td class=\"text-center\"><i class=\"fa fa-times text-danger\"></i></td>\n                                        <td class=\"text-center\"><i class=\"fa fa-check text-success\"></i></td>\n                                    </tr>\n                                    <tr>\n                                        <td>Premium Support</td>\n                                        <td class=\"text-center\"><i class=\"fa fa-times text-danger\"></i></td>\n                                        <td class=\"text-center\"><i class=\"fa fa-check text-success\"></i></td>\n                                    </tr>\n                                    <tr>\n                                        <td></td>\n                                        <td class=\"text-center\">Free</td>\n                                        <td class=\"text-center\">Just $49</td>\n                                    </tr>\n                                    <tr>\n                                        <td class=\"text-center\"></td>\n                                        <td class=\"text-center\">\n                                            <a href=\"#\" class=\"btn btn-round btn-fill btn-default disabled\">Current Version</a>\n                                        </td>\n                                        <td class=\"text-center\">\n                                            <a target=\"_blank\" href=\"https://www.creative-tim.com/product/material-dashboard-pro-angular2/?ref=md-free-angular-upgrade-local\" class=\"btn btn-round btn-fill btn-info\">Upgrade to PRO</a>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 390:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"card\">\n                <div class=\"card-header\" data-background-color=\"red\">\n                    <h2 class=\"title\">About Our Captians</h2>\n                </div>\n            </div>            \n        </div>\n        <div class=\"col-md-6\">\n            <div class=\"card card-profile\">\n                <div class=\"card-avatar\">\n                    <a href=\"#pablo\">\n                        <img class=\"img\" src=\"../assets/img/faces/partner1.jpg\" />\n                    </a>\n                </div>\n                <div class=\"content\">\n                    <h6 class=\"category text-gray\">{{team.partner1.desig}}</h6>\n                    <h4 class=\"card-title\">{{team.partner1.name}}</h4>\n                    <p class=\"card-content\">\n                        {{team.partner1.description}}\n                    </p>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-6\">\n            <div class=\"card card-profile\">\n                <div class=\"card-avatar\">\n                    <a href=\"#pablo\">\n                        <img class=\"img\" src=\"../assets/img/faces/partner2.jpg\" />\n                    </a>\n                </div>\n\n                <div class=\"content\">\n                    <h6 class=\"category text-gray\">{{team.partner2.desig}}</h6>\n                    <h4 class=\"card-title\">{{team.partner2.name}}</h4>\n                    <p class=\"card-content\">\n                        {{team.partner2.description}}\n                    </p>\n                </div>\n            </div>\n        </div>\n    </div>\n     <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"card\">\n                <div class=\"card-header\" data-background-color=\"red\">\n                    <h2 class=\"title\">About our Team</h2>\n                </div>\n                <div class=\"card-content\">\n                    <img class=\"img\" src=\"../assets/img/faces/team.jpg\" width=\"100%\"/>\n                    <p>{{team.description}}\n                </div>\n            </div>\n        </div>\n    </div> \n</div>\n</div>\n"

/***/ }),

/***/ 391:
/***/ (function(module, exports) {

module.exports = "<footer>\n    <div class=\"container-fluid\">\n        <nav class=\"pull-left\">\n            <ul>\n                <li>\n                    <a href=\"#\">\n                        Home\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\">\n                        Company\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\">\n                        Portfolio\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\">\n                       Blog\n                    </a>\n                </li>\n            </ul>\n        </nav>\n        <p class=\"copyright pull-right\">\n            &copy; {{test | date: 'yyyy'}} <a href=\"http://www.creative-tim.com\">Creative Tim</a>, made with love for a better web\n        </p>\n    </div>\n</footer>\n"

/***/ }),

/***/ 392:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-transparent\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\" [routerLink]=\"['/Home']\" role=\"link\">\n            <div class=\"logo\">\n                <img src=\"../assets/img/Freebird-Logo.png\" alt=\"{{getTitle()}}\">\n            </div>            \n            <a class=\"navbar-brand\">{{getTitle()}}</a>\n        </div>\n        <div class=\"collapse navbar-collapse\">\n            <ul class=\"nav nav-pills nav-pills-icons nav-pills-primary\">\n                <li routerLinkActive=\"active\" role=\"link\">\n                    <a [routerLink]=\"['/AboutOurCafe']\">\n\t\t\t            <i class=\"material-icons\">directions_bike</i>\n                        About Our Cafe\n                    </a>\n                </li>\n                <li routerLinkActive=\"active\" role=\"link\">\n                    <a [routerLink]=\"['/OurGallery']\">\n                        <i class=\"material-icons\">camera_enhance</i>  \n                        Our Gallery\n                    </a>\n                </li>\n\n                <li routerLinkActive=\"active\" role=\"link\">\n                    <a [routerLink]=\"['/OurMenu']\">\n                        <i class=\"material-icons\">local_dining</i>\n                        Our Menu\n                    </a>\n                </li>\n                <li routerLinkActive=\"active\" role=\"link\">\n                    <a [routerLink]=\"['/BookaTable']\">\n                        <i class=\"material-icons\">schedule</i>\n                        Book a Table\n                    </a>\n                </li>\n                <li routerLinkActive=\"active\" role=\"link\">\n                    <a [routerLink]=\"['/ContactUs']\">\n                        <i class=\"material-icons\">face</i>\n                        Contact US\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n<!-- role=\"tab\" data-toggle=\"tab\" -->\n"

/***/ }),

/***/ 393:
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\">\n    <a href=\"https://www.creative-tim.com\" class=\"simple-text\">\n        <div class=\"logo-img\">\n            <img src=\"/assets/img/angular2-logo-red.png\"/>\n        </div>\n        Creative Tim\n    </a>\n</div>\n<div class=\"sidebar-wrapper\">\n    <div class=\"nav-container\">\n        <ul class=\"nav\">\n            <li *ngFor=\"let menuItem of menuItems\" routerLinkActive=\"active\" class=\"{{menuItem.class}}\">\n                <a  [routerLink]=\"[menuItem.path]\">\n                    <i class=\"material-icons\">{{menuItem.icon}}</i>\n                    <p>{{menuItem.title}}</p>\n                </a>\n            </li>\n        </ul>\n    </div>\n</div>\n"

/***/ }),

/***/ 44:
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
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(178);
var Observable_1 = __webpack_require__(15);
var http_2 = __webpack_require__(178);
__webpack_require__(660);
__webpack_require__(661);
__webpack_require__(659);
var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.webDataConfig = null;
    }
    DataService.prototype.getWebData = function () {
        //    let params = new URLSearchParams();
        //     params.set('TaskId', taskId);
        if (this.webDataConfig) {
            return Observable_1.Observable.of(this.webDataConfig);
        }
        else {
            return this.http.get("/api/fetchWebData")
                .map(this.extractData.bind(this))
                .catch(this.handleError);
        }
    };
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

/***/ }),

/***/ 675:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(356);


/***/ })

},[675]);
//# sourceMappingURL=main.bundle.js.map