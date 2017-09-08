import { Component, OnInit, AfterViewInit, trigger, state, style, transition, animate } from '@angular/core';
import { DataService } from "../.././services/dataService";

declare var $;

@Component({
    selector: 'home-cmp',
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit, AfterViewInit {
    items = [{
        head: "Be Lemonade Member",
        subject: "Become our member to get free lemonade every saturday and sunday from 6:30am onwards."
    }
    ];
    cafeServices = ["We are a bunch of bicycle lovers who would like to share our experience with other companions. We have a pretty decent collection of armours for people like us.",
        "Alongside we also take care of your taste buds with some delicious cuisines from all around the world. To cater the health freaks we have some really awesome juice and shake bar, to try all possible variants of the world",
        "U can also share the creative insight of your team with us, in our really cool Amphitheater."
    ];
    events = [
        {
            title: "Crazy Motorbikers Breakfast - 10 September 2017 (06:30 AM ownwards)",
            description: "CAFE FREE BIRD, Guragon Faridabad Road brings an amazing breakfast buffet exclusively for all motorbikers. ",
            date: "10/09/2017"
        },
        {
            title: "DJ Evening - (8 September - 10 September)",
            description: "Cafe Free Bird brings you grooving DJ Evenings (Bollywood/Sufi/Rock)",
            date: "8/09/2017 - 10/09/2017"
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
