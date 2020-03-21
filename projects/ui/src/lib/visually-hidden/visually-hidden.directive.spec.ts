import { async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';

import { VisuallyHiddenDirective } from './visually-hidden.directive';

describe('VisuallyHiddenDirective', () => {

  describe('basic operations', () => {

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [
          VisuallyHiddenDirective,
          VisuallyHiddenTestComponent,
        ],
      })

      TestBed.compileComponents();
    }));

    it('should create', () => {
      const fixture = TestBed.createComponent(VisuallyHiddenTestComponent);
      const testDebugElement = fixture.debugElement;
      const checkboxDebugElement = testDebugElement.query(By.directive(VisuallyHiddenDirective));
      fixture.detectChanges();

      expect(checkboxDebugElement).toBeTruthy();
    });

    it('should have [class="its-visually-hidden"] attribute', () => {
      const fixture = TestBed.createComponent(VisuallyHiddenTestComponent);
      const testDebugElement = fixture.debugElement;
      const checkboxDebugElement = testDebugElement.query(By.directive(VisuallyHiddenDirective));
      fixture.detectChanges();

      expect(checkboxDebugElement.nativeElement.classList.contains('its-visually-hidden')).toBe(true);
    });

    it('should not be invisible to screen readers', () => {
      const fixture = TestBed.createComponent(VisuallyHiddenTestComponent);
      const testDebugElement = fixture.debugElement;
      const checkboxDebugElement = testDebugElement.query(By.directive(VisuallyHiddenDirective));
      fixture.detectChanges();

      expect(checkboxDebugElement.nativeElement.style.visibility).not.toBe('hidden');
      expect(checkboxDebugElement.nativeElement.style.opacity).not.toBe('0');
      expect(checkboxDebugElement.nativeElement.style.display).not.toBe('none');
    });

  });
});

@Component({
  template: `
    <label>
      <input type="checkbox" itsVisuallyHidden>
      Just a regular checkbox
    </label>
  `
})
class VisuallyHiddenTestComponent { }
