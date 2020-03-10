import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { ToggleComponent } from './toggle.component';

describe('ToggleComponent', () => {
  let component: ToggleComponent;
  let fixture: ComponentFixture<ToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ToggleComponent],
      imports: [FormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain an input', () => {
    const input = fixture.debugElement.query(By.css('input'));
    expect(input).toBeTruthy();
  });

  it('should contain a label', () => {
    const label = fixture.debugElement.query(By.css('label'));
    expect(label).toBeTruthy();
  });

  it('should generate an id if not provided', () => {
    component.id = 'foo';
    fixture.detectChanges();
    expect(fixture.componentInstance.id).toBe('foo');
  });

  it('the input and the label should have the same id/for attributes when not provided', () => {
    const input = fixture.debugElement.query(By.css('input'));
    const { id: $id } = input.attributes;
    const label = fixture.debugElement.query(By.css('label'));
    const { for: $for } = label.attributes;
    expect($id).toBe($for);
  });

  it('the input and the label should have the same id/for attributes when provided', () => {
    component.id = 'bar';
    fixture.detectChanges();
    const input = fixture.debugElement.query(By.css('input'));
    const { id: $id } = input.attributes;
    const label = fixture.debugElement.query(By.css('label'));
    const { for: $for } = label.attributes;
    expect($id).toBe('bar');
    expect($for).toBe('bar');
    expect($id).toBe($for);
  });

});
