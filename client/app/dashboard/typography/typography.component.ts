import { Component, OnInit } from '@angular/core';
import { DataService } from "../.././services/dataService";
import { BookingService } from "../.././services/booking.service";
import { NgModel } from '@angular/forms';

declare var $;
@Component({
    selector: 'typography-cmp',
    templateUrl: 'typography.component.html'
})

export class TypographyComponent implements OnInit {
    bookingOptions = [
        { path: "../../../assets/img/terrace.jpg", caption: "Terrace Cafe" },
        { path: "../../../assets/img/funkyYard.jpg", caption: "FunkyYard" },
        { path: "../../../assets/img/relaxArea.jpg", caption: "Relaxing Area" },
        { path: "../../../assets/img/amphitheater.jpg", caption: "Amphi-Theater" }
    ]
    bookingDetail:any;
    ParsleyForm:any;
    //type = demo.type;
    websiteDataConfig
    constructor(private dataservice: DataService, private bookingService: BookingService) {
    this.bookingDetail = {
        "name": "",
        "email": "",
        "guest": "",
        "mob": "",
        "area": ""
    } 
    
    }
    ngOnInit() {
        this.ParsleyForm = $('.parsleyjs').parsley();
        this.dataservice.getWebData()
            .subscribe(result => {
                this.websiteDataConfig = result;
            });
    }

    bookTable() {
        if(this.ParsleyForm.isValid()){
            this.bookingService.book(this.bookingDetail)
            .subscribe(result => {
                if (result.message == "done") {
                    $.notify({
                        icon: "notifications",
                        message: "done"

                    }, {
                            type: "success",
                            timer: 4000,
                            placement: {
                                from: "top",
                                align: "center"
                            }
                        });
                }
            });
        }
        
    }
}
