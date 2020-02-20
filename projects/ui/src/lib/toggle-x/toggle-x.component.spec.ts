import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleXComponent } from './toggle-x.component';

describe('ToggleXComponent', () => {
  let component: ToggleXComponent;
  let fixture: ComponentFixture<ToggleXComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleXComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
