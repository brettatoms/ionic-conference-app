import { Component } from '@angular/core';

/**
 * Generated class for the Component7 component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'component7',
  templateUrl: 'component7.html'
})
export class Component7 {

  text: string;

  constructor() {
    console.log('Hello Component7 Component');
    this.text = 'Hello World';
  }

}
