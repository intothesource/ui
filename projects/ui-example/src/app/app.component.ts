import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'UI Component Library';
  box = false;
  box2 = false;
  onBoxChanged(val, $event) {
    console.log(val, $event);
  }
}
