import { async, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';

import { ToggleComponent } from './toggle.component';

describe('ToggleComponent', () => {

  describe('basic operations', () => {

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ToggleComponent],
        imports: [FormsModule]
      })

      TestBed.compileComponents();
    }));

    it('should create', () => {
      const fixture = TestBed.createComponent(ToggleComponent);
      const toggleDebugElement = fixture.debugElement;

      fixture.detectChanges();
      expect(toggleDebugElement).toBeTruthy();
    });

    it('should add `its-toggle` class to `<its-toggle>` element', () => {
      const fixture = TestBed.createComponent(ToggleComponent);
      const toggleDebugElement = fixture.debugElement;

      fixture.detectChanges();
      expect(toggleDebugElement.nativeElement.classList.contains('its-toggle')).toBe(true);
    });

    it('should create a native input', () => {
      const fixture = TestBed.createComponent(ToggleComponent);
      const toggleDebugElement = fixture.debugElement;
      const inputDebugElement = toggleDebugElement.query(By.css('input'));

      fixture.detectChanges();
      expect(inputDebugElement).toBeTruthy();
    });

    it('should create a native label', () => {
      const fixture = TestBed.createComponent(ToggleComponent);
      const toggleDebugElement = fixture.debugElement;
      const inputLabelElement = toggleDebugElement.query(By.css('label'));

      fixture.detectChanges();
      expect(inputLabelElement).toBeTruthy();
    });

  });

  describe('generated attributes', () => {

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ToggleTestComponent, ToggleComponent],
        imports: [FormsModule]
      })

      TestBed.compileComponents();
    }));

    it('should create an id if one is not provided', () => {
      const fixture = TestBed.createComponent(ToggleTestComponent);
      const toggleDebugElement = fixture.debugElement.query(By.directive(ToggleComponent));
      const inputDebugElement = toggleDebugElement.query(By.css('input'));

      fixture.detectChanges();
      expect(toggleDebugElement.componentInstance.id).toBeTruthy();
      expect(inputDebugElement.nativeElement.id).toBeTruthy();
      expect(inputDebugElement.nativeElement.id).toBe(toggleDebugElement.componentInstance.id);
    });

    it('label [for] should match generated [id]', () => {
      const fixture = TestBed.createComponent(ToggleTestComponent);
      const toggleDebugElement = fixture.debugElement.query(By.directive(ToggleComponent));
      const inputDebugElement = toggleDebugElement.query(By.css('input'));
      const labelDebugElement = toggleDebugElement.query(By.css('label'));
      fixture.detectChanges();

      expect(toggleDebugElement.componentInstance.id).toBeTruthy();
      expect(inputDebugElement.nativeElement.id).toBeTruthy();
      expect(labelDebugElement.nativeElement.htmlFor).toBeTruthy();
      expect(inputDebugElement.nativeElement.id).toBe(labelDebugElement.nativeElement.htmlFor);
    });

  });

  describe('With ID', () => {

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ToggleWithIdTestComponent, ToggleComponent],
        imports: [FormsModule]
      })

      TestBed.compileComponents();
    }));

    it('should use the id that was provided', () => {
      const fixture = TestBed.createComponent(ToggleWithIdTestComponent);
      const toggleDebugElement = fixture.debugElement.query(By.directive(ToggleComponent));
      const inputDebugElement = toggleDebugElement.query(By.css('input'));
      fixture.detectChanges();

      expect(toggleDebugElement.componentInstance.id).toBe('abc-123');
      expect(inputDebugElement.nativeElement.id).toBe('abc-123');
    });

    it('should use the [for] that was provided as [id]', () => {
      const fixture = TestBed.createComponent(ToggleWithIdTestComponent);
      const toggleDebugElement = fixture.debugElement.query(By.directive(ToggleComponent));
      const inputDebugElement = toggleDebugElement.query(By.css('input'));
      const labelDebugElement = toggleDebugElement.query(By.css('label'));
      fixture.detectChanges();

      expect(toggleDebugElement.componentInstance.id).toBe('abc-123');
      expect(inputDebugElement.nativeElement.id).toBe('abc-123');
      expect(labelDebugElement.nativeElement.htmlFor).toBe('abc-123');
      expect(labelDebugElement.nativeElement.htmlFor).toBe(inputDebugElement.nativeElement.id);
    });

  });

  describe('With ngModel', () => {

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ToggleWithNgModelTestComponent, ToggleComponent],
        imports: [FormsModule]
      })

      TestBed.compileComponents();
    }));

    it('should use the value that was provided', async(() => {
      const fixture = TestBed.createComponent(ToggleWithNgModelTestComponent);
      fixture.detectChanges();

      const toggleDebugElement = fixture.debugElement.query(By.directive(ToggleComponent));
      const component = toggleDebugElement.componentInstance;
      const inputDebugElement = toggleDebugElement.query(By.css('input'));

      fixture.whenStable().then(() => {
        fixture.detectChanges();

        expect(component.value).toBe(true);
        expect(inputDebugElement.nativeElement.value).toBe('on');
        expect(inputDebugElement.nativeElement.checked).toBe(true);
      });

    }));

  });
});

@Component({
  template: `<its-toggle></its-toggle>`
})
class ToggleTestComponent { }

@Component({
  template: `<its-toggle [id]="id"></its-toggle>`
})
class ToggleWithIdTestComponent {
  id = 'abc-123';
}

@Component({
  template: `
    <p>Toggle that uses [[(ngModel)]="model"]</p>
    <its-toggle [(ngModel)]="model"></its-toggle>
    <pre><code>model: {{ model | json }}</code></pre>
  `
})
class ToggleWithNgModelTestComponent {
  model = true;
}
