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
var forms_1 = require('@angular/forms');
var BugDetailComponent = (function () {
    function BugDetailComponent() {
        this.modalId = "bugModal";
    }
    BugDetailComponent.prototype.ngOnInit = function () {
        this.configureForm();
    };
    BugDetailComponent.prototype.configureForm = function () {
        this.bugForm = new forms_1.FormGroup({
            title: new forms_1.FormControl(null, forms_1.Validators.required),
            status: new forms_1.FormControl(1, forms_1.Validators.required),
            severity: new forms_1.FormControl(1, forms_1.Validators.required),
            description: new forms_1.FormControl(null, forms_1.Validators.required)
        });
    };
    BugDetailComponent.prototype.submitForm = function () {
        console.log(this.bugForm); // TODO: REMOVE
    };
    BugDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'bug-detail',
            templateUrl: 'bug-detail.component.html',
            styleUrls: ['bug-detail.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], BugDetailComponent);
    return BugDetailComponent;
}());
exports.BugDetailComponent = BugDetailComponent;
//# sourceMappingURL=bug-detail.component.js.map