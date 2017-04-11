import { Component } from '@angular/core';

/**
 * Generated class for the Component6 component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'component6',
  templateUrl: 'component6.html'
})
export class Component6 {

  text: string;

  constructor() {
    console.log('Hello Component6 Component');
    this.text = 'Hello World';
  }

}
