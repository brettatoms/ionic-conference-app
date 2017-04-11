import { Component } from '@angular/core';

/**
 * Generated class for the Component8 component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'component8',
  templateUrl: 'component8.html'
})
export class Component8 {

  text: string;

  constructor() {
    console.log('Hello Component8 Component');
    this.text = 'Hello World';
  }

}
