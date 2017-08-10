import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MODULE_COMPONENTS, MODULE_ROUTES } from './dashboard.routes';
import 'parsleyjs';

@NgModule({
    imports: [CommonModule,
        RouterModule.forChild(MODULE_ROUTES),
        FormsModule
    ],
    declarations: [ MODULE_COMPONENTS ]
})

export class DashboardModule{}
