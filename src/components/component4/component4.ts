import { Component } from '@angular/core';

/**
 * Generated class for the Component4 component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'component4',
  templateUrl: 'component4.html'
})
export class Component4 {

  text: string;

  constructor() {
    console.log('Hello Component4 Component');
    this.text = 'Hello World';
  }

}
