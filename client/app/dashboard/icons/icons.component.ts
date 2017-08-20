import { Component, OnInit } from '@angular/core';

declare var $;
@Component({
    selector: 'icons-cmp',
    templateUrl: 'icons.component.html'
})

export class IconsComponent implements OnInit{
    menuItems:Array<any>;
    counter = 0;
    divRef
    constructor(){
        this.menuItems = ["../../../assets/img/menu1.png","../../../assets/img/menu2.png","../../../assets/img/menu3.png","../../../assets/img/menu4.png","../../../assets/img/menu6.png","../../../assets/img/menu5.png"]
    }
    ngOnInit(){
        this.changeBackgroundImages(this.counter);
        
    }
    handleLeftClick(){
        if(this.counter<= 0)
            return;
        this.changeBackgroundImages(--this.counter);
    }
    handleRightClick(){
        if(this.counter>= this.menuItems.length -1)
            return;
        this.changeBackgroundImages(++this.counter);
    }
   changeBackgroundImages(imgId){
       this.divRef = document.getElementById("menuImg").children[0]
        this.divRef.src = this.menuItems[imgId];
   }
}
