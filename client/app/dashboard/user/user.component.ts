import { Component, OnInit } from '@angular/core';
import { DataService } from "../.././services/dataService";

declare var $;
@Component({
    selector: 'abtUs-cmp',
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit{
    team = {
        partner1: {
        desig:"Freebird's Pilot/India's Youth!!:p (Software Engineer)",
        name:"Himanshu",
        description:"Works with an MNC as a software engineer. Co-owner and visionary of FreeBird Cafe"
    },
    partner2: {
        desig:"Freebird's Pilot/GST Benificary!!:p (Chartered Accountant)",
        name:"Ankit",
        description:"Works with an MNC as a chartered accountant. Co-owner and visionary of FreeBird Cafe"
    },
    description:"We are an enthusiastic bunch of cycle riders, working around on weekdays to earn money for weekend cycle trips and to buy our giant armours."

    }
    websiteDataConfig: any;
    constructor(private dataservice:DataService){}    

    ngOnInit(){
        this.dataservice.getWebData()
                .subscribe(result => {
                    this.websiteDataConfig = result;
                });
        // $.getScript('../../../assets/js/material-dashboard.js');

    }
}
