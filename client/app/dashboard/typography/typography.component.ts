import { Component,OnInit } from '@angular/core';
import { DataService } from "../.././services/dataService";

declare var $;
@Component({
    selector: 'typography-cmp',
    templateUrl: 'typography.component.html'
})

export class TypographyComponent implements OnInit{
    bookingOptions=[
        {path:"../../../assets/img/terrace.jpg",caption:"Terrace Cafe"},
        {path:"../../../assets/img/funkyYard.jpg",caption:"FunkyYard"},
        {path:"../../../assets/img/relaxArea.jpg",caption:"Relaxing Area"},
        {path:"../../../assets/img/amphitheater.jpg",caption:"Amphi-Theater"}
    ]
    websiteDataConfig
    constructor(private dataservice: DataService){}
    ngOnInit(){
        this.dataservice.getWebData()
                .subscribe(result => {
                    this.websiteDataConfig = result;
                });
    }
}
