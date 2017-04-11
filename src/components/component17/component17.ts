import { Component } from '@angular/core';

/**
 * Generated class for the Component17 component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'component17',
  templateUrl: 'component17.html'
})
export class Component17 {

  text: string;

  constructor() {
    console.log('Hello Component17 Component');
    this.text = 'Hello World';
  }

}
