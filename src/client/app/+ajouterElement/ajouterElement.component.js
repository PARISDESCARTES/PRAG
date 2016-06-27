"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var index_1 = require('@angular/forms/index');
var primeng_1 = require('primeng/primeng');
/**
 * This class represents the lazy loaded EnfantComponent.
 */
var AjouterElementComponent = (function () {
    function AjouterElementComponent() {
        this.categorie = [];
        this.categorie.push({ label: 'Bilan', value: 'Bilan' });
        this.categorie.push({ label: 'A voir', value: 'A voir' });
        this.categorie.push({ label: 'A voir', value: 'A voir' });
        this.categorie.push({ label: 'A voir', value: 'A voir' });
    }
    AjouterElementComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-home',
            templateUrl: 'ajouterElement.component.html',
            styleUrls: ['ajouterElement.component.css'],
            directives: [index_1.REACTIVE_FORM_DIRECTIVES, primeng_1.Dropdown]
        })
    ], AjouterElementComponent);
    return AjouterElementComponent;
}());
exports.AjouterElementComponent = AjouterElementComponent;
//# sourceMappingURL=ajouterElement.component.js.map