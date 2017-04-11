import { Component } from '@angular/core';

/**
 * Generated class for the Component19 component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'component19',
  templateUrl: 'component19.html'
})
export class Component19 {

  text: string;

  constructor() {
    console.log('Hello Component19 Component');
    this.text = 'Hello World';
  }

}
