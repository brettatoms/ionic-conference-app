import { Component } from '@angular/core';

/**
 * Generated class for the Component11 component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'component11',
  templateUrl: 'component11.html'
})
export class Component11 {

  text: string;

  constructor() {
    console.log('Hello Component11 Component');
    this.text = 'Hello World';
  }

}
