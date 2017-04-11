import { Component } from '@angular/core';

/**
 * Generated class for the Component14 component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'component14',
  templateUrl: 'component14.html'
})
export class Component14 {

  text: string;

  constructor() {
    console.log('Hello Component14 Component');
    this.text = 'Hello World';
  }

}
