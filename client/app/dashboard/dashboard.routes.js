"use strict";
var home_component_1 = require('./home/home.component');
var user_component_1 = require('./user/user.component');
var icons_component_1 = require('./icons/icons.component');
var table_component_1 = require('./table/table.component');
var notifications_component_1 = require('./notifications/notifications.component');
var typography_component_1 = require('./typography/typography.component');
var maps_component_1 = require('./maps/maps.component');
var upgrade_component_1 = require('./upgrade/upgrade.component');
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