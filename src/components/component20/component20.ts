import { Component } from '@angular/core';

/**
 * Generated class for the Component20 component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'component20',
  templateUrl: 'component20.html'
})
export class Component20 {

  text: string;

  constructor() {
    console.log('Hello Component20 Component');
    this.text = 'Hello World';
  }

}
