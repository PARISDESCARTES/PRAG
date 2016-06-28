import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {TabMenu,MenuItem} from 'primeng/primeng';


/**
 * This class represents the navigation bar component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
  directives: [ROUTER_DIRECTIVES, TabMenu]
})
//export class NavbarComponent {}

export class TabMenuComponent {

  private items: MenuItem[];

  private activeItem: MenuItem;

  ngOnInit() {
    this.items = [
      {label: 'Accueil', icon: 'fa-home',  routerLink: ['/enfant']},
      {label: 'Fil d\'actualité', icon: 'fa-newspaper-o',  routerLink: ['/filActu']},
      {label: 'Programme', icon: 'fa-calendar',  routerLink: ['/programme']},
      {label: 'Dashboard', icon: 'fa-dashboard',  routerLink: ['/dashboard']},
      {label: 'Bilan', icon: 'fa-wpforms',  routerLink: ['/bilan']},
      {label: 'Enfant', icon: 'fa-child',  routerLink: ['/ajout/enfant']},
      {label: 'Ajouter élément', icon: 'fa-plus',  routerLink: ['/compteRendu']},
    ];

    this.activeItem = this.items[0];
  }
}
