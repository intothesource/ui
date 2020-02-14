import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'its-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit {

  @ViewChild('input', null) input: ElementRef;
  @ViewChild('label', null) label: ElementRef;

  @Input() toggleName: string;
  @Input() toggleState: string;

  constructor() { }

  ngOnInit() {
    this.setRandomName(this.toggleName);
    this.linkElements(this.toggleName);
    this.setState(this.toggleState);
  }

  setRandomName(name) {
    if (!name) {
      this.toggleName = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }
  }

  linkElements(name) {
    this.input.nativeElement.setAttribute('name', name);
    this.input.nativeElement.setAttribute('id', name);
    this.label.nativeElement.setAttribute('for', name);
  }

  setState(bool) {
    if (typeof this.toggleState === "boolean") {
      this.input.nativeElement.checked = bool;
    }
  }

}
