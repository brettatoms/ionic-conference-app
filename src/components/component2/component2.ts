import { Component } from '@angular/core';

/**
 * Generated class for the Component2 component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'component2',
  templateUrl: 'component2.html'
})
export class Component2 {

  text: string;

  constructor() {
    console.log('Hello Component2 Component');
    this.text = 'Hello World';
  }

}
