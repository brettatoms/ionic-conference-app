import { Component } from '@angular/core';

/**
 * Generated class for the Component3 component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'component3',
  templateUrl: 'component3.html'
})
export class Component3 {

  text: string;

  constructor() {
    console.log('Hello Component3 Component');
    this.text = 'Hello World';
  }

}
