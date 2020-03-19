import { async, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from './button.module';

describe('ToggleModule', () => {

  describe('basic operations', () => {

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [
          ButtonTestComponent,
          ATestComponent,
          ButtonButtonTestComponent
        ],
        imports: [ButtonModule],
      })

      TestBed.compileComponents();
    }));

    it('should create as <its-button/>', () => {
      const fixture = TestBed.createComponent(ButtonTestComponent);
      const testDebugElement = fixture.debugElement;
      const buttonDebugElement = testDebugElement.query(By.css('its-button'));
      fixture.detectChanges();

      expect(buttonDebugElement).toBeTruthy();
      expect(buttonDebugElement.nativeElement.classList.contains('its-button')).toBe(true);
    });

    it('should create as <a its-button/>', () => {
      const fixture = TestBed.createComponent(ATestComponent);
      const testDebugElement = fixture.debugElement;
      const buttonDebugElement = testDebugElement.query(By.css('[its-button]'));
      fixture.detectChanges();

      expect(buttonDebugElement).toBeTruthy();
      expect(buttonDebugElement.nativeElement.classList.contains('its-button')).toBe(true);
    });

    it('should create as <button its-button/>', () => {
      const fixture = TestBed.createComponent(ButtonButtonTestComponent);
      const testDebugElement = fixture.debugElement;
      const buttonDebugElement = testDebugElement.query(By.css('[its-button]'));
      fixture.detectChanges();

      expect(buttonDebugElement).toBeTruthy();
      expect(buttonDebugElement.nativeElement.classList.contains('its-button')).toBe(true);
    });

  });
});

@Component({
  template: `<its-button>Foo Bar</its-button>`
})
class ButtonTestComponent { }

@Component({
  template: `<a its-button>Foo Bar</a>`
})
class ATestComponent { }

@Component({
  template: `<button its-button>Foo Bar</button>`
})
class ButtonButtonTestComponent { }
