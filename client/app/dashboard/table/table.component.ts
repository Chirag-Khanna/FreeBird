import { Component, OnInit } from '@angular/core';
import { DataService } from "../.././services/dataService";

declare var $;
@Component({
    selector: 'table-cmp',
    templateUrl: 'table.component.html'
})

export class TableComponent implements OnInit {
    CafImgs = [
        ['../../../assets/img/event1.jpg', '../../../assets/img/event3.jpg'],
        ['../../../assets/img/event4.jpg','../../../assets/img/event5.jpg'],
        ['../../../assets/img/event6.jpg','../../../assets/img/event7.jpg'],
        ['../../../assets/img/event8.jpg','../../../assets/img/event9.jpg']
    ];
    prodImgs = [
        ['../../assets/img/product1.jpg', '../../../assets/img/product2.jpg', '../../../assets/img/product3.jpg'],
        ['../../assets/img/product4.jpg', '../../../assets/img/product5.jpg', '../../../assets/img/product6.jpg'],
        
    ];
    websiteDataConfig:any;
    constructor(private dataservice: DataService){}
    ngOnInit(){
        this.dataservice.getWebData()
                .subscribe(result => {
                    this.websiteDataConfig = result;
                });
    }
}
