import { Component } from '@angular/core';

/**
 * Generated class for the Component12 component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'component12',
  templateUrl: 'component12.html'
})
export class Component12 {

  text: string;

  constructor() {
    console.log('Hello Component12 Component');
    this.text = 'Hello World';
  }

}
