import { Component } from '@angular/core';

/**
 * Generated class for the Component13 component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'component13',
  templateUrl: 'component13.html'
})
export class Component13 {

  text: string;

  constructor() {
    console.log('Hello Component13 Component');
    this.text = 'Hello World';
  }

}
