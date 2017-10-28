import { Component, OnInit, AfterViewInit, trigger, state, style, transition, animate } from '@angular/core';
import { DataService } from "../.././services/dataService";

declare var $;

@Component({
    selector: 'home-cmp',
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit, AfterViewInit {
    items = [{
        head: "Giving is Good!!",
        subject: "Cafe FreBird welcomes “Bikerz of India” for their ride with “Sh. Omkar Nath Sharma” aka “Medicine Baba” on 29th of October, 2017. Experience the Joy of Giving!!"
    }
    ];
    cafeServices = ["We are a bunch of bicycle lovers who would like to share our experience with other companions. We have a pretty decent collection of armours for people like us.",
        "Alongside we also take care of your taste buds with some delicious cuisines from all around the world. To cater the health freaks we have some really awesome juice and shake bar, to try all possible variants of the world",
        "U can also share the creative insight of your team with us, in our really cool Amphitheater."
    ];
    events = [
        {
            title: "Giving is Good!! - 29 October 2017 (06:30 AM ownwards)",
            description: "CAFE FREE BIRD, Guragon Faridabad Road welcomes  “Bikerz of India” for their ride with “Sh. Omkar Nath Sharma” aka “Medicine Baba”. All biker groups are invited in the event. Enjoy refreshments and have lots of fun at Cafe Free Bird. ",
            date: "29/10/2017"
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

    ngAfterViewInit() {
    }
}
