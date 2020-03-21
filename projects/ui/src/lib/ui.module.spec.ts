import { async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';

import { UiModule } from './ui.module';
import { ButtonModule } from './button/button.module';
import { ToggleModule } from './toggle/toggle.module';

describe('UiModule', () => {

  describe('using the whole module', () => {

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
          UiModule,
        ],
        declarations: [
          ToggleTestComponent,
          ButtonTestComponent,
        ],
      })

      TestBed.compileComponents();
    }));

    it('should create a toggle', () => {
      const fixture = TestBed.createComponent(ToggleTestComponent);
      const testDebugElement = fixture.debugElement;
      const toggleDebugElement = testDebugElement.query(By.css('its-toggle'));
      fixture.detectChanges();

      expect(toggleDebugElement).toBeTruthy();
      expect(toggleDebugElement.nativeElement.classList.contains('its-toggle')).toBe(true);
    });

    it('should create a button', () => {
      const fixture = TestBed.createComponent(ButtonTestComponent);
      const testDebugElement = fixture.debugElement;
      const buttonDebugElement = testDebugElement.query(By.css('its-button'));
      fixture.detectChanges();

      expect(buttonDebugElement).toBeTruthy();
      expect(buttonDebugElement.nativeElement.classList.contains('its-button')).toBe(true);
    });

  });

  describe('using individual modules', () => {

    describe('Button', () => {

      beforeEach(async(() => {
        TestBed.configureTestingModule({
          imports: [ButtonModule],
          declarations: [ButtonTestComponent],
        }).compileComponents()
      }));

      it('should create a button', () => {
        const fixture = TestBed.createComponent(ButtonTestComponent);
        const testDebugElement = fixture.debugElement;
        const buttonDebugElement = testDebugElement.query(By.css('its-button'));
        fixture.detectChanges();

        expect(buttonDebugElement).toBeTruthy();
        expect(buttonDebugElement.nativeElement.classList.contains('its-button')).toBe(true);
      });

    });

    describe('Toggle', () => {

      beforeEach(async(() => {
        TestBed.configureTestingModule({
          imports: [ToggleModule],
          declarations: [ToggleTestComponent],
        }).compileComponents();
      }));

      it('should create a toggle', () => {
        const fixture = TestBed.createComponent(ToggleTestComponent);
        const testDebugElement = fixture.debugElement;
        const toggleDebugElement = testDebugElement.query(By.css('its-toggle'));
        fixture.detectChanges();

        expect(toggleDebugElement).toBeTruthy();
        expect(toggleDebugElement.nativeElement.classList.contains('its-toggle')).toBe(true);
      });

    });
  });

});

@Component({ template: `<its-toggle></its-toggle>` })
class ToggleTestComponent { }

@Component({ template: `<its-button>Hello World</its-button>` })
class ButtonTestComponent { }
