import { Component } from '@angular/core';

/**
 * Generated class for the Component16 component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'component16',
  templateUrl: 'component16.html'
})
export class Component16 {

  text: string;

  constructor() {
    console.log('Hello Component16 Component');
    this.text = 'Hello World';
  }

}
