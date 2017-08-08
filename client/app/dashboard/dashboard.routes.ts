import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { IconsComponent } from './icons/icons.component';
import { TableComponent } from './table/table.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { TypographyComponent } from './typography/typography.component';
import { MapsComponent } from './maps/maps.component';
import { UpgradeComponent } from './upgrade/upgrade.component';

export const MODULE_ROUTES: Route[] =[
    { path: 'Home', component: HomeComponent },
    { path: 'AboutOurCafe', component: UserComponent },
    { path: 'OurGallery', component: TableComponent },
    { path: 'OurMenu', component: IconsComponent },
    { path: 'LatestNewsandEvents', component: NotificationsComponent },
    { path: 'BookaTable', component: TypographyComponent },
    { path: 'ContactUs', component: MapsComponent },
    { path: '', redirectTo: 'Home', pathMatch: 'full' }
]

export const MODULE_COMPONENTS = [
    HomeComponent,
    UserComponent,
    TableComponent,
    IconsComponent,
    NotificationsComponent,
    TypographyComponent,
    MapsComponent,
    UpgradeComponent
]
