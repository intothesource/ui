import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'its-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit {

  @ViewChild('input', null) input: ElementRef;
  @ViewChild('label', null) label: ElementRef;

  constructor() { }

  ngOnInit() {
    console.log(this.input, this.label);
  }

}
