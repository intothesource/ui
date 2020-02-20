import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ui-example';
  box = false;
  box2 = false;
  onBoxChanged(val, $event) {
    console.log(val, $event);
  }
}
