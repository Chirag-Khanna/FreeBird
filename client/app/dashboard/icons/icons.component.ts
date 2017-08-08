import { Component, OnInit } from '@angular/core';
import { DataService } from "../.././services/dataService";

declare var $;
@Component({
    selector: 'icons-cmp',
    templateUrl: 'icons.component.html'
})

export class IconsComponent implements OnInit{
    websiteDataConfig: any;
    constructor(private dataservice: DataService){

    }
    ngOnInit(){
        this.dataservice.getWebData()
            .subscribe(result => {
                this.websiteDataConfig = result;
            });
    }
}
