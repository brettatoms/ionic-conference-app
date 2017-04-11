import { Component } from '@angular/core';

/**
 * Generated class for the Component5 component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'component5',
  templateUrl: 'component5.html'
})
export class Component5 {

  text: string;

  constructor() {
    console.log('Hello Component5 Component');
    this.text = 'Hello World';
  }

}
