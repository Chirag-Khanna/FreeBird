import { Component, OnInit } from '@angular/core';
import {LocationStrategy, PlatformLocation, Location} from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from "./services/dataService";

declare var $:any;

@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit{
    location: Location;
    websiteDataConfig;
    constructor(location:Location, private dataservice:DataService) {
        this.location = location;
        this.dataservice.getWebData()
                .subscribe(result => {
                        this.websiteDataConfig = result;
                });
    }
    ngOnInit(){
        $.getScript('../assets/js/material-dashboard.js');
        $.getScript('../assets/js/initMenu.js');

    }
    public isMaps(path){
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice( 1 );
        if(path == titlee){
            return false;
        }
        else {
            return true;
        }
    }
}
