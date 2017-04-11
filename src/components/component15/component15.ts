import { Component } from '@angular/core';

/**
 * Generated class for the Component15 component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'component15',
  templateUrl: 'component15.html'
})
export class Component15 {

  text: string;

  constructor() {
    console.log('Hello Component15 Component');
    this.text = 'Hello World';
  }

}
