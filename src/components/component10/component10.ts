import { Component } from '@angular/core';

/**
 * Generated class for the Component10 component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'component10',
  templateUrl: 'component10.html'
})
export class Component10 {

  text: string;

  constructor() {
    console.log('Hello Component10 Component');
    this.text = 'Hello World';
  }

}
