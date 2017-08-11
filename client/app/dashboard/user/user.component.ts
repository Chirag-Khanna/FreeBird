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
        desig:"Freebird's Pilot(Software Engineer)",
        name:"Himanshu",
        description:"Works with an MNC as a software engineer. Co-owner and visionary of FreeBird Cafe. Cycling enthusiast and member of Audacity Riders Faridabad"
    },
    partner2: {
        desig:"Freebird's Pilot(Chartered Accountant)",
        name:"Ankit",
        description:"Works with an MNC as a chartered accountant. Co-owner and visionary of FreeBird Cafe. Cycling enthusiast and member of Audacity Riders Faridabad"
    },
    description:`"AUDACITY" means courage. The courage to overcome the constraints of life which is weak mindset and unhealthy lifestyle.
    So together we aim to join hands to improve our health and mindset for better life. 
    We aim to promote cycling and recycling habits in the city.
    We aim to make brothers for life.\nWe aim to become more awesome than general population.
    We aim to enjoy the pedal fun at its best.We aim to sweat, sweat and sweat to improve our fitness.
    THE BEST HABITS ON THE EARTH ARE CYCLING AND RECYCLING.
    Get yourself, your friends and your family members into cycling.
    Join the most COOLEST & GROOVIEST GANG of Faridabad
    Be Good.Be Fit. Play Fun`

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
