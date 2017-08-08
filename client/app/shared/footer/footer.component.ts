import { Component, HostBinding } from '@angular/core';
declare var $;
@Component({
    selector: 'footer-cmp',
    templateUrl: 'footer.component.html'
})

export class FooterComponent{
    test : Date = new Date();
}
