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
var initDemo = require('../../../assets/js/charts.js');
var HomeComponent = (function () {
    function HomeComponent() {
        this.items = [{
                head: "Juicebar",
                subject: "Meet the new kiwi juice. Meet the new kiwi juice. Meet the new kiwi juice."
            },
            {
                head: "Cycle Warehouse",
                subject: "Meet our monster Fat Cycle"
            }
        ];
        this.cafeServices = ["We are a bunch of bicycle lovers who would like to share our experience with other companions. We have a pretty decent collection of armours for people like us.",
            "Alongside we also take care of your taste buds with some delicious cuisines from all around the world. To cater the health freaks we have some really awesome juice and shake bar, to try all possible variants of the world",
            "U can also share the creative insight of your team with us, in our really cool Amphitheater."
        ];
        this.customReviews = [
            {
                reviewer: "XYZ",
                review: "Great Ambiencce",
                date: "13/08/2017"
            },
            {
                reviewer: "XYZ",
                review: "Great Ambience",
                date: "13/08/2017"
            }
        ];
    }
    HomeComponent.prototype.ngOnInit = function () {
        console.log(this.cafeServices);
        // $('[data-toggle="checkbox"]').each(function () {
        //     if($(this).data('toggle') == 'switch') return;
        //
        //     var $checkbox = $(this);
        //     $checkbox.checkbox();
        // });
        initDemo();
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home-cmp',
            templateUrl: 'home.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map