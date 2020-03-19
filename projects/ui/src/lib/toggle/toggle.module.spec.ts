import { async, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ToggleModule } from './toggle.module';

describe('ToggleModule', () => {

  describe('basic operations', () => {

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ToggleTestComponent],
        imports: [ToggleModule],
      })

      TestBed.compileComponents();
    }));

    it('should create', () => {
      const fixture = TestBed.createComponent(ToggleTestComponent);
      const testDebugElement = fixture.debugElement;
      const toggleDebugElement = testDebugElement.query(By.css('its-toggle'));
      fixture.detectChanges();

      expect(toggleDebugElement).toBeTruthy();
    });

    it('should have an input', () => {
      const fixture = TestBed.createComponent(ToggleTestComponent);
      const testDebugElement = fixture.debugElement;
      const toggleDebugElement = testDebugElement.query(By.css('its-toggle'));
      const inputDebugElement = toggleDebugElement.query(By.css('input'));
      fixture.detectChanges();

      expect(inputDebugElement).toBeTruthy();
    });

    it('should have label', () => {
      const fixture = TestBed.createComponent(ToggleTestComponent);
      const testDebugElement = fixture.debugElement;
      const toggleDebugElement = testDebugElement.query(By.css('its-toggle'));
      const labelDebugElement = toggleDebugElement.query(By.css('label'));
      fixture.detectChanges();

      expect(labelDebugElement).toBeTruthy();
    });

  });
});

@Component({
  template: `<its-toggle></its-toggle>`
})
class ToggleTestComponent { }
