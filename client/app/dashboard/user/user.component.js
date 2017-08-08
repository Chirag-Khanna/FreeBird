"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var UserComponent = (function () {
    function UserComponent() {
        this.team = {
            partner1: {
                desig: "Freebird's Pilot/India's Youth!!:p (Software Engineer)",
                name: "Himanshu",
                description: "Works with an MNC as a software engineer. Co-owner and visionary of FreeBird Cafe"
            },
            partner2: {
                desig: "Freebird's Pilot/GST Benificary!!:p (Chartered Accountant)",
                name: "Ankit",
                description: "Works with an MNC as a chartered accountant. Co-owner and visionary of FreeBird Cafe"
            },
            description: "We are an enthusiastic bunch of cycle riders, working around on weekdays to earn money for weekend cycle trips and to buy our giant armours."
        };
    }
    UserComponent.prototype.ngOnInit = function () {
        // $.getScript('../../../assets/js/material-dashboard.js');
    };
    UserComponent = __decorate([
        core_1.Component({
            selector: 'abtUs-cmp',
            templateUrl: 'user.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map