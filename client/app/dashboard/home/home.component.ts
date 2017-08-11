import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { DataService } from "../.././services/dataService";

declare var $;

@Component({
    selector: 'home-cmp',
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    items = [{
        head: "Cycling Event",
        subject: "Cycling event on 15th August."
    },
    {
        head: "MotorBiking Event",
        subject: "MotorBiking event on 15th August"
    }
    ];
    cafeServices = ["We are a bunch of bicycle lovers who would like to share our experience with other companions. We have a pretty decent collection of armours for people like us.",
        "Alongside we also take care of your taste buds with some delicious cuisines from all around the world. To cater the health freaks we have some really awesome juice and shake bar, to try all possible variants of the world",
        "U can also share the creative insight of your team with us, in our really cool Amphitheater."
    ];
    events = [
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
    websiteDataConfig: any;
    constructor(private dataservice: DataService) {
    }
    ngOnInit() {
            this.dataservice.getWebData()
                .subscribe(result => {
                    this.websiteDataConfig = result;
                });
        // $('[data-toggle="checkbox"]').each(function () {
        //     if($(this).data('toggle') == 'switch') return;
        //
        //     var $checkbox = $(this);
        //     $checkbox.checkbox();
        // });
    }
}
