import { Component } from '@angular/core';

/**
 * Generated class for the Component1 component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'component1',
  templateUrl: 'component1.html'
})
export class Component1 {

  text: string;

  constructor() {
    console.log('Hello Component1 Component');
    this.text = 'Hello World';
  }

}
