import { Component } from '@angular/core';
@Component({
  selector: 'app-touch-event',
  template: '<div class="gestures" (click)="onElementClicked()">Click me</div>' +
  '<div class="gestures" (tap)="onElementTapped()">Tap me</div> ' +
  '<div class="gestures" (press)="onElementPressed()">Long press me</div>'

})
export class TouchEventComponent {

}
