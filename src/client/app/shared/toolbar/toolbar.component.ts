import { Component } from '@angular/core';
import {Button} from 'primeng/primeng';

/**
 * This class represents the toolbar component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.css'],
  directives: [Button],
})
export class ToolbarComponent {
  onclick() {
    alert('connexion en construction!');
  }
}
