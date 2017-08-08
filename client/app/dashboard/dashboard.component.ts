import { Component,Input } from '@angular/core';
declare var $;
@Component({
    selector: 'dashboard-cmp',
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent{
    @Input() websiteDataConfig;
}
