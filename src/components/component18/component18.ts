import { Component } from '@angular/core';

/**
 * Generated class for the Component18 component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'component18',
  templateUrl: 'component18.html'
})
export class Component18 {

  text: string;

  constructor() {
    console.log('Hello Component18 Component');
    this.text = 'Hello World';
  }

}
